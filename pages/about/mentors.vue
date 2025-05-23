<template>
  <div>
    <v-row class="pa-0 ma-0" no-gutters style="background: #0c1737">
      <v-col cols="12" class="text-center elevation-12 pa-12">
        <h3 class="text-h3 font-weight-light mb-4">Our mentors</h3>
        <p>Dedicated mentors help us deliver a world-class experience.</p>
      </v-col>
    </v-row>
    
    <v-container style="max-width: 1000px" class="my-2">
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="mentor in mentors" :key="mentor.name">
          <v-card class="mx-auto" style="height: 100%; background: #181818">
            <v-parallax
              :src="mentor.image"
              class="align-end elevation-6"
              height="200px"
              cover
              :scale="0.95"
            >
              <div class="image-overlay"></div>
              <v-card-title class="text-h5" style="position: relative; z-index: 2" v-html="mentor.name"></v-card-title>
              <v-card-subtitle class="mb-3 mt-n3" style="position: relative; z-index: 2" v-html="mentor.position || 'Mentor'"></v-card-subtitle>
            </v-parallax>

            <v-card-text class="pt-2 mb-n2">
              <div class="mb-2" v-if="mentor.expertise">
                <p class="text-overline mb-n1 text-grey">Expertise</p>
                <p class="text-body-1" v-html="mentor.expertise"></p>
              </div>

              <div v-if="mentor.career?.length > 0">
                <p class="text-overline mb-n1 text-grey">Career</p>
                <p class="text-body-1 mb-2" v-for="career in mentor.career" v-html="career"></p>
              </div>

              <div v-if="mentor.education?.length > 0">
                <p class="text-overline mb-n1 text-grey">Education</p>
                <p class="text-body-1 mb-2" v-for="education in mentor.education" v-html="education"></p>
              </div>

              <div v-if="mentor.teams?.length > 0" v-for="team in mentor.teams" class="mb-2">
                <p class="text-overline mb-n1 text-grey" v-html="team.team"></p>
                <p class="text-body-1" v-for="role in team.roles" v-html="role"></p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  const mentors = [
    {
      name: "Christian Romano, '17",
      position: "Head Coach",
      expertise: 'Electronics',
      career: ['Managing Member,<br><a href="https://www.oakrdg.com" target="_blank">OakRidge Consulting</a>'],
      education: ['BS, Industrial Engineering,<br>University of Pittsburgh'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: [
            'Mentor (2018 - present)',
            'Student (2013 - 2017)',
          ]
        },
      ],
      image: '/mentors/cromano.webp',
    },
    {
      name: "Kevin Heid",
      position: "Faculty Moderator",
      expertise: 'Mechanical',
      career: ['Engineering Teacher,<br>Central Catholic High School'],
      education: ['MS, Education,<br>Edinboro University'],
      teams: [],
      image: '/mentors/kheid.webp',
    },
    {
      name: "Aidan Liddy, '23",
      position: 'Assistant Coach',
      expertise: 'Code',
      career: ['Network Analyst,<br><a href="https://www.centralintegrations.com" target="_blank">Central Integrations</a>'],
      education: ['BS, Computer Science,<br>University of Pittsburgh'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: [
            'Mentor (2024 - present)',
            'Student (2019 - 2023)',
          ]
        },
      ],
      image: '/mentors/aliddy.webp',
    },
    {
      name: "Joe Hudak, '13",
      position: "Mentor",
      expertise: 'Mechanical',
      career: ['Enterprise Data and Initiatives Manager,<br>TriState Capital Bank'],
      education: ['MS, Computational Mathematics,<br>Duquesne University'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: [
            'Mentor (2014 - present)',
            'Student (2010 - 2013)',
          ]
        },
      ],
      // image: '/mentors/jhudak.webp',
    },
    {
      name: "Alisha Patel",
      position: 'Mentor',
      expertise: 'Mechanical',
      career: [],
      education: ['BS, Mechanical Engineering,<br>Carnegie Mellon University'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: ['Mentor (2022 - present)']
        },
        {
          team: 'FRC Team 6328',
          roles: ['Student (2018 - 2021)']
        },
      ],
      // image: '/mentors/apatel.webp',
    },
    {
      name: "Justin Tomko",
      position: 'Mentor',
      expertise: 'Code',
      career: ['Mechanical Engineer,<br>Naval Nuclear Laboratory'],
      education: ['MS, Mechanical Engineering,<br>University of Pittsburgh'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: ['Mentor (2017 - present)']
        },
      ],
      // image: '/mentors/jtomko.webp',
    },
    {
      name: "Ben Very, '23",
      position: 'Mentor',
      expertise: 'Mechanical',
      career: [],
      education: ['BS, Mechanical Engineering,<br>University of Pittsburgh'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: [
            'Mentor (2024 - present)',
            'Student (2022 - 2023)',
          ]
        },
      ],
      // image: '/mentors/bvery.webp',
    },
    {
      name: "Alaina Vallus",
      position: 'Mentor',
      career: ['Cyber Threat Analyst,<br>BNY Mellon'],
      education: ['BS, Cyber Forensics and Information Security,<br>Robert Morris University'],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: ['Mentor (2021 - present)']
        },
      ],
      // image: '/mentors/avallus.webp',
    },
    {
      name: "Cam Vallus",
      position: 'Mentor',
      expertise: 'Mechanical',
      career: ['Journeyman Carpenter'],
      education: [],
      teams: [
        {
          team: 'FRC Team 2641',
          roles: [
            'Mentor (2018 - present)',
            'Student (2013 - 2017)',
          ]
        },
      ],
      // image: '/mentors/cvallus.webp',
    },
  ]

  useHead({
		title: "Mentors | Pittsburgh Central Catholic Robotics",
	});
</script>

<style scoped>
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%); 
  z-index: 1;
}
</style>