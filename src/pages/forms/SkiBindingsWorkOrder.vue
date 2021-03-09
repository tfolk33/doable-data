<template>
  <div class="q-pa-lg" style="padding: 5% 10% 10% 10%">
      <div class="q-pa-sm row"><h4 style="margin: 0">Personal Information and Skier Agreement</h4></div>
      <hr>
      <br>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="q-pa-sm row"><q-input v-model="datein" filled type="date" hint="Date In" /></div>
        <div class="q-pa-sm row"><q-input v-model="datedue" filled type="date" hint="Date Due" /></div>
        <div class="q-pa-sm row"><q-input v-model="takenby" filled hint="Taken By" /></div>
        <div class="q-pa-sm row"><q-input v-model="firstname" filled hint="First Name" /></div>
        <div class="q-pa-sm row"><q-input v-model="lastname" filled hint="Last Name" /></div>
        <div class="q-pa-sm row"><q-input v-model="street" filled hint="Street Address" /></div>
        <div class="q-pa-sm row"><q-input v-model="city" filled type="city" hint="City" /></div>
        <div class="q-pa-sm row"><q-input v-model="state" filled type="state" hint="State" /></div>
        <div class="q-pa-sm row"><q-input v-model="zipcode" filled hint="Zip Code" /></div>
        <div class="q-pa-sm row"><q-input v-model="tel" filled type="tel" hint="Telephone number" /></div>
        <div class="q-pa-sm row"><q-input v-model="email" filled type="email" hint="Email Address" /></div>
        <div class="q-pa-sm row"><q-input v-model="localaccomodations" filled hint="Local Accomodations" /></div>
        <div class="q-pa-sm row"><q-input v-model="localphone" filled type="tel" hint="Local Phone" /></div>
        <hr>
        <div class="q-pa-sm row"><q-input v-model.number="weight" filled hint="Weight" /><p class="additionalLabel">lbs.</p></div>
        <div class="q-pa-sm row"><q-input v-model.number="heightft" filled hint="Height (ft)" /><p class="additionalLabel">ft</p><q-input v-model.number="heightin" filled type="heightin" hint="Height (in)" /><p class="additionalLabel">in</p></div>
        <div class="q-pa-sm row"><q-input v-model.number="age" filled hint="Age" /></div>
        <br>
        <hr>
        <div class="q-pa-sm row"><p>Skier Type (Select One): </p></div>
        <div class="q-pa-sm row"><q-option-group v-model="skiertype" :options="skiertypes" color="primary"/></div>
        <br>
        <hr>
        <div class="q-pa-sm row"><p><strong>AGREEMENT</strong></p></div>
        <div class="q-pa-sm row"><p>I understand how this equipment works and have received instructions and satisfactory answers to any questions regarding the use and function of this equipment. If this is new equipment, I acknowledge receipt of the manufacturer’s written instructions. If at any time this equipment does not seem to be working properly, I will stop using it immediately and return it for inspection and possible repair or adjustment.</p></div>
        <div class="q-pa-sm row"><p>I understand that proper bindings settings depend upon the accuracy of my statements about weight, height, age, skier type on this form. I have confirmed that the binding release/retention settings on this equipment correspond to those stated on this form. </p></div>
        <div class="q-pa-sm row"><p>If this equipment is to be used by someone other than me, I certify that I am acting as agent for the user and that I will provide this form and all pertinent warnings and information to the user. </p></div>
        <div class="q-pa-sm row"><p>I HAVE CAREFULLY READ, UNDERSTOOD AND AGREED TO THE TERMS OF THE WARNING, ASSUMPTION OF RISK, LIABILITY RELEASE, INDEMNITY AND HOLD HARMLESS AGREEMENT AND AGREEMENT NOT TO SUE ON THE REVERSE SIDE OF THIS DOCUMENT</p></div>
        <div class="q-pa-sm row"><q-input v-model="usersignature" filled type="usersignature" hint="Signature of Equipment User (Please Type)" /><q-input v-model="userdatesigned" filled type="userdatesigned" hint="Date" /></div>
        <div class="q-pa-sm row"><q-input v-model="guardiansignature" filled type="guardiansignature" hint="Signature of Parent/Guardian/Agent (Please Type)" /><q-input v-model="guardiandatesigned" filled type="guardiandatesigned" hint="Date" /></div>
        <br>
        <hr>
        <div class="q-pa-sm row"><p>Skis: </p></div>
        <div class="q-pa-sm row"><q-input v-model="skibrand" filled type="skibrand" hint="Brand" /></div>
        <div class="q-pa-sm row"><q-input v-model="skimodel" filled type="skimodel" hint="Model" /></div>
        <div class="q-pa-sm row"><q-input v-model="skiserialno" filled type="serialno" hint="Serial No." /></div>
        <div class="q-pa-sm row"><q-input v-model.number="skilength" filled type="skilength" hint="Length" /><p class="additionalLabel">cm</p></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="skicharges" filled hint="Ski Charges" /></div>
        <div class="q-pa-sm row"><p>Boots: </p></div>
        <div class="q-pa-sm row"><q-input v-model="bootbrand" filled type="bootbrand" hint="Brand" /></div>
        <div class="q-pa-sm row"><q-input v-model="bootmodel" filled type="bootmodel" hint="Model" /></div>
        <div class="q-pa-sm row"><q-input v-model.number="bootsolelength" filled type="bootsolelength" hint="Length" /><p class="additionalLabel">mm</p></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="bootcharges" filled hint="Boot Charges" /></div>
        <div class="q-pa-sm row"><p>Bindings: </p></div>
        <div class="q-pa-sm row"><q-input v-model="bindingsbrand" filled type="bindingsbrand" hint="Brand" /></div>
        <div class="q-pa-sm row"><q-input v-model="bindingsmodel" filled type="bindingsmodel" hint="Model" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="bindingscharges" filled hint="Bindings Charges" /></div>
        <div class="q-pa-sm row"><p>Bindings: </p></div>
        <div class="q-pa-sm row"><q-input v-model="otherbrand" filled type="otherbrand" hint="Brand" /></div>
        <div class="q-pa-sm row"><q-input v-model="othermodel" filled type="othermodel" hint="Model" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="othercharges" filled hint="Other Charges" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="totalcharges" filled hint="Total Charges" /></div>
        <hr>
        <div class="q-pa-sm row"><q-input v-model="workrequested" filled type="textarea" hint="Work Requested" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="additionalcharges" filled hint="Additional Charges" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="laborcharges" filled hint="Labor Charges" /></div>
        <br>
        <hr>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="estimate" filled hint="Estimate" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="deposit" filled hint="Deposit" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="equipmenttotal" filled hint="Equipment Total" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="labortotal" filled hint="Labor Total" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="subtotal" filled hint="Subtotal" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="tax" filled hint="Tax" /></div>
        <div class="q-pa-sm row"><p class="additionalLabel">$</p><q-input v-model.number="total" filled hint="Total" /></div>
        <div class="q-pa-sm row"><q-input v-model="specialinstructions" filled hint="Special Instructions" /></div>
        <br>
        <hr>
        <br>
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
      firstname: '',
      lastname: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      tel: '',
      email: '',
      localaccomodations: '',
      localphone: '',
      weight: '',
      heightft: '',
      heightin: '',
      age: '',
      skiertype: 'op1',
      skiertypes: [
        {
          label: 'Level 1',
          value: 'op1'
        },
        {
          label: 'Level 2',
          value: 'op2'
        },
        {
          label: 'Level 3',
          value: 'op3'
        }
      ],
      usersignature: '',
      userdatesigned: '',
      guardiansignature: '',
      guardiandatesigned: '',
      skibrand: '',
      skimodel: '',
      skiserialno: '',
      skilength: '',
      skicharges: '',
      bootbrand: '',
      bootmodel: '',
      bootsolelength: '',
      bootcharges: '',
      bindingsbrand: '',
      bindingsmodel: '',
      bindingscharges: '',
      otherbrand: '',
      othermodel: '',
      othercharges: '',
      totalcharges: '',
      workrequested: '',
      additionalcharges: '',
      laborcharges: '',
      estimate: '',
      deposit: '',
      equipmenttotal: '',
      labortotal: '',
      subtotal: '',
      tax: '',
      total: '',
      specialinstructions: '',
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
