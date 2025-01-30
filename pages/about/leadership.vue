<template>
  <div>
    <v-row class="pa-0 ma-0" no-gutters style="background: #0c1737">
      <v-col cols="12" class="text-center elevation-12">
        <h3 class="text-h3 font-weight-light mt-12 mb-4">Our leaders</h3>
        <p class="mb-12">A student-run team is core to the mission of FIRST.</p>
      </v-col>
    </v-row>
    
    <v-container style="max-width: 1300px" class="my-2">
      <v-row>
        <v-col cols="12" sm="6" v-for="season in seasons">
          <v-card style="position: relative;">
            <p class="text-overline ml-4 mt-2 mb-n4 text-grey-lighten-1">{{ season.year }}</p>
            <v-card-title class="text-h5" v-html="season.game"></v-card-title>

            <v-card-text class="mt-n4">
              <v-row no-gutters>
                <v-col v-for="student in season.leaders" cols="12" md="6">
                  <p class="text-overline mb-n1 mt-3 text-grey" v-html="student.position"></p>
                  <p class="text-body-1" v-html="student.name"></p>
                </v-col>
              </v-row>
            </v-card-text>
            
            <img :src="season.logo" :style="`z-index: -1; position: absolute; top: ${season.top}; right: ${season.right}; width: 30dvh; opacity: 0.1`" alt="">
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  const seasons = [
    {
      year: 2025,
      game: 'Reefscape',
      logo: '/seasons/reefscape.svg',
      top: '-8px',
      right: '-8px',
      leaders: [
        {
          name: "Jay Mox, '25",
          position: 'Captain',
        },
        {
          name: "Zachary Moats, '25",
          position: 'Mechanical Team Lead',
        },
        {
          name: "Luke Nuzzo, '25",
          position: 'Electronics Team Lead',
        },
        {
          name: "Victor Ezaru, '25",
          position: 'Code Team Lead',
        },
        {
          name: "-",
          position: 'Driver'
        },
        {
          name: "-",
          position: 'Operator'
        }
      ]
    },
    {
      year: 2024,
      game: 'Crescendo',
      logo: '/seasons/crescendo.svg',
      top: '-40px',
      right: '-8px',
      leaders: [
        {
          name: "John Beeson, '24",
          position: 'Captain',
        },
        {
          name: "John Beeson, '24",
          position: 'Mechanical Team Lead',
        },
        {
          name: "Jay Mox, '25",
          position: 'Electronics Team Lead',
        },
        {
          name: "Matthew Jordan, '24",
          position: 'Code Team Lead',
        },
        {
          name: "Luke Nuzzo, '25",
          position: 'Driver'
        },
        {
          name: "Brenden McCarthy, '25",
          position: 'Operator'
        }
      ]
    },
    {
      year: 2023,
      game: 'Charged Up',
      logo: '/seasons/chargedup.svg',
      top: '-40px',
      right: '-8px',
      leaders: [
        {
          name: "Aidan Liddy, '23",
          position: 'Captain',
        },
        {
          name: "Zack George, '23",
          position: 'Mechanical Team Lead',
        },
        {
          name: "Dominic Servello, '23",
          position: 'Electronics Team Lead',
        },
        {
          name: "Aidan Liddy, '23",
          position: 'Code Team Lead',
        },
        {
          name: "Finn Thompson, '26",
          position: 'Driver'
        },
        {
          name: "Aidan Liddy, '23",
          position: 'Operator'
        }
      ]
    },
    {
      year: 2022,
      game: 'Rapid React',
      logo: '/seasons/rapidreact.svg',
      top: '12px',
      right: '-4px',
      leaders: [
        {
          name: "Peter Szalay, '22",
          position: 'Captain',
        },
        {
          name: "Peter Szalay, '22",
          position: 'Mechanical Team Lead',
        },
        {
          name: "Dominic Servello, '23",
          position: 'Electronics Team Lead',
        },
        {
          name: "Aidan Liddy, '23",
          position: 'Code Team Lead',
        },
        {
          name: "Nolan Cynkar, '23",
          position: 'Driver'
        },
        {
          name: "Aidan Liddy, '23",
          position: 'Operator'
        }
      ]
    },
    {
      year: 2021,
      game: 'Infinite Recharge',
      logo: '/seasons/infiniterecharge.svg',
      top: '-12px',
      right: '-4px',
      leaders: [
        {
          name: "Vince Servello, '21",
          position: 'Captain',
        },
        {
          name: "Vince Servello, '21",
          position: 'Mechanical Team Lead',
        },
        {
          name: "Dominic Servello, '23",
          position: 'Electronics Team Lead',
        },
        {
          name: "Aidan Liddy, '23",
          position: 'Code Team Lead',
        },
        {
          name: "Vince Servello, '21",
          position: 'Driver'
        },
        {
          name: "-",
          position: 'Operator'
        }
      ]
    },
    {
      year: 2020,
      game: 'Infinite Recharge',
      logo: '/seasons/infiniterecharge.svg',
      top: '-12px',
      right: '-4px',
      leaders: [
        {
          name: "Ian Connolly, '20",
          position: 'Captain',
        },
        {
          name: "Anthony Cognetti, '20",
          position: 'Mechanical Team Lead',
        },
        {
          name: "Ian Connolly, '20",
          position: 'Electronics Team Lead',
        },
        {
          name: "Ryan Haver, '20",
          position: 'Code Team Lead',
        },
        {
          name: "Ian Connolly, '20",
          position: 'Driver'
        },
        {
          name: "Vince Servello, '21",
          position: 'Operator'
        }
      ]
    },
  ]

  useHead({
		title: "Leadership | Pittsburgh Central Catholic Robotics",
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