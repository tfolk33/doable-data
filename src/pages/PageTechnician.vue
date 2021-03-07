<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
      <div class="q-pa-sm row"><h4 style="margin: 0">System Inspection Record:</h4></div>
      <hr>
      <br>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="q-pa-sm row"><q-input v-model="datein" filled type="date" hint="Date In" /></div>
        <div class="q-pa-sm row"><q-input v-model="datedue" filled type="date" hint="Date Due" /></div>
        <div class="q-pa-sm row"><q-input v-model="takenby" filled hint="Taken By" /></div>
        <div class="q-pa-sm row"><p><strong>System Inspection Record:</strong></p></div>
        <div class="q-pa-sm row"><q-input v-model.number="inspbootsolelength" filled type="bootsolelength" hint="Length" /><p class="additionalLabel">mm</p></div>
        <div class="q-pa-sm row"><q-input v-model="skiercode" filled hint="Skier Code" /></div>
        <div class="q-pa-sm row"><p>Boot Sole Type (Check One): </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="bootsoletype" :options="bootsoletypes" color="primary"/></div>
        <div class="q-pa-sm row"><q-input v-model="othersoletype" filled hint="Other Boot Sole Type" /></div>
        <div class="q-pa-sm row"><p>Boot/Binding Interface (Check One): </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="bootbindinginterface" :options="bootbindinginterfaces" color="primary"/></div>
        <div class="q-pa-sm row"><p>Test of Toes for Elastic Travel and Recentering: </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="testoftoestravel" :options="passfail" color="primary"/></div>
        <div class="q-pa-sm row"><p>Test of Heels for Elastic Travel and Return: </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="testofheelstravel" :options="passfail" color="primary"/></div>
        <div class="q-pa-sm row"><p>Test of Toes for Forward Pressure Has Been Properly Set: </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="forwardpressure" :options="passfail" color="primary"/></div>
        <div class="q-pa-sm row"><p>Test of Toes for Twist Release: </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="testoftoesrelease" :options="passfail" color="primary"/></div>
        <div class="q-pa-sm row"><p>Test of Heels for Forward Lean Release: </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="testofheelsrelease" :options="passfail" color="primary"/></div>
        <div class="q-pa-sm row"><q-input v-model="initialsetting" filled hint="Initial Setting" /></div>
        <div class="q-pa-sm row"><p>Final Settings: </p></div>
        <div class="q-pa-sm row"><q-input v-model="lefttoe" filled hint="Left Toe" /><q-input v-model="lefttoe" filled hint="Right Toe" /></div>
        <div class="q-pa-sm row"><q-input v-model="lefttoe" filled hint="Left Heel" /><q-input v-model="lefttoe" filled hint="Right Heel" /></div>
        <br>
        <hr>
        <br>
        <div class="q-pa-sm row"><q-input v-model="comments" filled type="textarea" hint="Comments" /></div>
        <div class="q-pa-sm row"><q-input v-model="instructionstoskier" filled type="textarea" hint="Special Instructions to Skier" /></div>
        <div class="q-pa-sm row"><q-input v-model="techniciansignature" filled type="text" hint="Technician Signature (Please Type)" /><q-input v-model="techniciandate" filled type="date" hint="Date" /></div>
        <br>
        <div class="q-pa-sm row"><q-btn label="Submit" type="submit" color="primary"/></div>
      </q-form>
      </div>
</template>

<script>
export default {
  data () {
    return {
      datein: '',
      datedue: '',
      takenby: '',
      inspbootsolelength: '',
      skiercode: '',
      bootsoletype: 'op1',
      bootsoletypes: [
        {
          label: 'Alpine (ISO 5355) "A" (Adult Sole)',
          value: 'op1'
        },
        {
          label: 'GripWalk Adult (ISO 9523)',
          value: 'op2'
        },
        {
          label: 'Alpine Touring (ISO 9523)',
          value: 'op3'
        },
        {
          label: 'Alpine (ISO 5355) "C" (Junior Sole)',
          value: 'op4'
        },
        {
          label: 'GripWalk Child (ISO Boot/Binding system approved)',
          value: 'op5'
        },
        {
          label: 'Other (Type Below)',
          value: 'op6'
        }
      ],
      othersoletype: '',
      bootbindinginterface: 'op1',
      bootbindinginterfaces: [
        {
          label: 'Boot Sole Type and Binding are Compatible',
          value: 'op1'
        },
        {
          label: 'Utilizes Pin/Tec Inserts for Skiing and Climbing',
          value: 'op2'
        },
        {
          label: 'Utilizes Pin/Tec Inserts for "Climbing Only"',
          value: 'op3'
        }
      ],
      testoftoestravel: 'pass',
      passfail: [
        {
          label: 'Pass',
          value: 'pass'
        },
        {
          label: 'Fail',
          value: 'fail'
        }
      ],
      testofheelstravel: 'pass',
      forwardpressure: 'pass',
      testoftoesrelease: 'pass',
      testofheelsrelease: 'pass',
      initialsetting: '',
      lefttoe: '',
      righttoe: '',
      leftheel: '',
      rightheel: '',
      comments: '',
      instructionstoskier: '',
      techniciansignature: '',
      techniciandate: ''
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }
}
</script>

<style>
  .additionalLabel {
    padding: 2%
  }
</style>
