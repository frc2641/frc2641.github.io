<template>
  <v-row no-gutters>
    <v-col cols="12" md="6">
      <v-img
        class="pa-0 ma-0 elevation-24"
        :min-height="mdAndUp ? 'calc(100dvh - 64px)' : ''"
        src="@/assets/contact.webp"
        cover
      ></v-img>
    </v-col>

    <v-col
      cols="12"
      md="6"
      :style="
        mdAndUp
          ? 'padding: 75px 150px 25px 150px'
          : 'padding: 24px'
      "
      style="max-width: 892.5px"
    >
      <h2 class="text-h2 mb-5">Contact us</h2>
      <p class="transparent-subtitle mb-6">
        Have questions or comments? Want to offer a sponsorship? Let us know.
      </p>

      <v-divider></v-divider>

      <v-text-field
        variant="solo"
        hide-details
        class="mb-4 mt-8"
        label="Name"
        v-model="data.name"
      ></v-text-field>

      <v-row class="pa-0 mt-0">
        <v-col cols="6">
          <v-text-field
            variant="solo"
            hide-details
            class="mb-7"
            label="Phone"
            v-model="data.phone"
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            variant="solo"
            hide-details
            class="mb-7"
            label="Email"
            v-model="data.email"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        variant="solo"
        hide-details
        class="mb-7"
        label="Subject"
        v-model="data.subject"
      ></v-text-field>

      <v-textarea
        variant="solo"
        hide-details
        label="Message"
        v-model="data.message"
      ></v-textarea>

      <section>
        <div class="d-flex mt-6">
          <v-btn
            href="mailto:cchsteam2641@gmail.com"
            icon
            variant="text"
            color="grey"
            ><v-icon>mdi-email</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://www.instagram.com/frc2641"
            icon
            variant="text"
            color="grey"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://www.facebook.com/Team2641Pccr"
            icon
            variant="text"
            color="grey"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://twitter.com/FRC2641"
            icon
            variant="text"
            color="grey"
            ><v-icon>mdi-twitter</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://github.com/CentralCatholic2641"
            icon
            variant="text"
            color="grey"
            ><v-icon>mdi-github</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!data.name || !data.phone || !data.email || !data.subject || !data.message"
            style="width: 125px"
            class="elevation-24"
            @click="send()"
            size="large"
            color="primary"
            >Send<v-icon class="ml-3" size="24">mdi-send</v-icon></v-btn
          >
        </div>

        <div class="ml-3 mt-4">
          <p class="text-grey-lighten-1">
            Central Catholic High School<br />
            ATTN: Kevin Heid<br />
            4720 Fifth Ave<br />
            Pittsburgh, PA 15213
          </p>
        </div>
      </section>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  const { mdAndUp } = useDisplay();

  let data = ref({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  function send() {
    const { name, phone, email, subject, message } = data.value;

    const mailtoLink = `mailto:cchsteam2641@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  useHead({
		title: "Contact | Pittsburgh Central Catholic Robotics",
	});
</script>