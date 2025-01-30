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
      :style="mdAndUp ? 'padding: 75px 150px 25px 150px' : 'padding: 24px'"
      style="max-width: 892.5px"
    >
      <h2 class="text-h2 mb-5">Contact us</h2>
      <p class="transparent-subtitle mb-6">Have questions or comments? Want to offer a sponsorship? Let us know.</p>

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
            icon="mdi-email"
            variant="text"
            color="grey"
          ></v-btn>
          <v-btn
            target="_blank"
            href="https://www.instagram.com/frc2641"
            icon="mdi-instagram"
            variant="text"
            color="grey"
          ></v-btn>
          <v-btn
            target="_blank"
            href="https://www.facebook.com/Team2641Pccr"
            icon="mdi-facebook"
            variant="text"
            color="grey"
          ></v-btn>
          <v-btn
            target="_blank"
            href="https://twitter.com/FRC2641"
            icon="mdi-twitter"
            variant="text"
            color="grey"
          ></v-btn>
          <v-btn
            target="_blank"
            href="https://github.com/CentralCatholic2641"
            icon="mdi-github"
            variant="text"
            color="grey"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!data.name || !data.phone || !data.email || !data.subject || !data.message"
            style="width: 125px"
            class="elevation-24"
            @click="send()"
            size="large"
            color="primary"
            text="Send"
            append-icon="mdi-send"
          ></v-btn>
        </div>

        <div class="ml-3 mt-4 text-grey-lighten-1">
          <p class="font-weight-bold mb-2">Mailing:</p>
          <p>Central Catholic High School</p>
          <p>ATTN: Kevin Heid</p>
          <p>4720 Fifth Ave</p>
          <p>Pittsburgh, PA 15213</p>
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