<template>
  <v-row no-gutters>
    <v-col cols="12" md="5">
      <v-parallax
        class="pa-0 ma-0"
        style="height: 100%"
        src="@/assets/2026_summer_workshop_flyer.webp"
        cover
      />
    </v-col>

    <v-col
      cols="12"
      md="7"
      xl="6"
      :style="lgAndUp ? 'padding: 90px' : 'padding: 24px'"
    >
      <h2 class="text-h2 mb-5">2026 Summer Workshops</h2>
      <p class="subtitle">
        Learn the essential skills for robotics: mechanical design, prototyping,
        machining, 3D printing, electronics, programming, and more. Become
        involved in your team!
      </p>

      <v-divider class="mt-6 mb-3"></v-divider>

      <v-row>
        <v-col cols="12" lg="8">
          <h5 class="text-h5 mb-1">Schedule</h5>

          <p class="text-body-2 mb-3 text-grey font-italic">
            Subject to change
          </p>

          <v-card>
            <v-table density="compact">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Topic</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="workshop in workshops" :key="workshop.date">
                  <td>{{ workshop.date }}</td>
                  <td>{{ workshop.time }}</td>
                  <td>{{ workshop.topic }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>

        <v-col cols="12" lg="4">
          <p class="font-weight-bold mb-2">
            <u>Free</u> and open to all current and incoming CCHS students
            interested in robotics.
          </p>

          <p>Lunch will <u>NOT</u> be provided, please bring a lunch.</p>

          <v-divider class="my-3"></v-divider>
          <h5 class="text-h5 mb-3">Location</h5>

          <p>Central Catholic High School</p>
          <p>STEM Building Ground Floor</p>
          <p>4720 Fifth Ave</p>
          <p>Pittsburgh, PA 15213</p>
        </v-col>
      </v-row>

      <v-divider class="mt-6 mb-3"></v-divider>
      <h5 class="text-h5 mb-3">Registration</h5>

      <v-text-field
        variant="solo"
        hide-details
        class="mb-4"
        label="Parent Name"
        v-model="data.parent_name"
      ></v-text-field>

      <v-text-field
        variant="solo"
        hide-details
        class="mb-4"
        label="Student Name"
        v-model="data.student_name"
      ></v-text-field>

      <v-row class="pa-0 mt-0" no-gutters>
        <v-col cols="12" sm="6">
          <v-text-field
            class="mr-2"
            variant="solo"
            hide-details
            label="Parent Phone"
            v-model="data.phone"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            variant="solo"
            hide-details
            class="ml-2 mb-4"
            label="Parent Email"
            v-model="data.email"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="pa-0 mt-0" no-gutters>
        <v-col cols="12" sm="6">
          <p class="mb-2 text-grey-lighten-1">
            Which workshops will your son be attending?
          </p>
          <v-checkbox
            color="primary"
            density="compact"
            hide-details
            :label="`${workshop.date} (${workshop.topic})`"
            v-for="workshop in workshops"
            :key="workshop.date"
            v-model="data.workshops[workshop.date]"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="6">
          <v-textarea
            class="ml-2"
            variant="solo"
            hide-details
            label="Additional Information"
            v-model="data.message"
          ></v-textarea>

          <div class="d-flex mt-4" v-if="!smAndUp">
            <v-spacer></v-spacer>
            <v-btn
              :disabled="
                !data.parent_name ||
                !data.student_name ||
                !data.phone ||
                !data.email
              "
              style="width: 125px"
              class="elevation-24"
              @click="send()"
              size="large"
              color="primary"
              text="Send"
              append-icon="mdi-send"
            ></v-btn>
          </div>

          <div class="d-flex mt-4">
            <v-spacer></v-spacer>
            <v-btn
              v-if="smAndUp"
              :disabled="
                !data.parent_name ||
                !data.student_name ||
                !data.phone ||
                !data.email
              "
              style="width: 150px"
              class="elevation-24"
              @click="send()"
              size="large"
              color="primary"
              text="Submit"
              append-icon="mdi-send"
            ></v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { smAndUp, lgAndUp } = useDisplay();

let data: Ref<{
  parent_name: string;
  student_name: string;
  phone: string;
  email: string;
  message: string;
  workshops: Record<string, boolean>;
}> = ref({
  parent_name: "",
  student_name: "",
  phone: "",
  email: "",
  message: "",
  workshops: {},
});

let workshops = ref([
  {
    date: "Sat, Jun 6",
    time: "10 AM to 3 PM",
    topic: "TBA",
  },
  {
    date: "Sat, Jun 27",
    time: "10 AM to 3 PM",
    topic: "TBA",
  },
  {
    date: "Sat, Jul 11",
    time: "10 AM to 3 PM",
    topic: "TBA",
  },
  {
    date: "Sat, Jul 25",
    time: "10 AM to 3 PM",
    topic: "TBA",
  },
  {
    date: "Sat, Aug 8",
    time: "10 AM to 3 PM",
    topic: "TBA",
  },
]);

for (const workshop of workshops.value) {
  data.value.workshops[workshop.date] = true;
}

async function send() {
  const { parent_name, student_name, phone, email, message } = data.value;

  const payload = { parent_name, student_name, phone, email, message };

  try {
    const res = await fetch(
      "https://www.frclookout.com/api/workshops/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const json = await res.json();
    if (!res.ok) throw new Error(json?.message || "Failed to send");

    data.value = {
      parent_name: "",
      student_name: "",
      phone: "",
      email: "",
      message: "",
      workshops: {},
    };

    for (const workshop of workshops.value) {
      data.value.workshops[workshop.date] = true;
    }
  } catch (err) {
    console.error(err);
    alert("Error sending message. Please try again later.");
  }
}

useHead({
  title: "2026 Summer Workshops | Pittsburgh Central Catholic Robotics",
});
</script>

<style scoped>
.sticky-flyer-col {
  position: sticky;
  top: 0;
  height: 100dvh;
  align-self: flex-start;
  padding: 0 !important;
}

.sticky-flyer-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
</style>
