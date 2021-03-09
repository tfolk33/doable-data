<template>
  <div class="q-pa-lg row" style="padding: 5% 10% 10% 10%">
    <q-form class="form">
      <div class="q-pa-sm row"><h4 class="q-ma-none">Rental Agreement</h4></div>
      <hr />
      <br />
      <h5>Person Reponsibile for Equipment</h5>
      <div class="full-width row items-center">
        <q-input
          class="q-pa-sm"
          filled
          v-model="firstName"
          label="First Name"
        />
        <q-input class="q-pa-sm" filled v-model="lastName" label="Last Name" />
      </div>
      <q-input
        class="q-pa-sm"
        filled
        v-model="address"
        label="Home Address Street"
      />
      <div class="row full-width">
        <q-input class="q-pa-sm" filled v-model="city" label="City" />
        <q-input class="q-pa-sm" filled v-model="state" label="State" />
        <q-input class="q-pa-sm" filled v-model="zip" label="ZIP" />
      </div>
      <hr />
      <h5>Skier/Rider 1</h5>
      <div>Skier Type</div>
      <q-radio v-model="skier1.info.type" :val="1" label="I" />
      <q-radio v-model="skier1.info.type" :val="2" label="II" />
      <q-radio v-model="skier1.info.type" :val="3" label="III" />
      <div>Rider</div>
      <q-radio v-model="skier1.info.rider" val="reg" label="Regular" />
      <q-radio v-model="skier1.info.rider" val="goofy" label="Goofy" />
      <q-input
        class="q-pa-sm"
        filled
        v-model.number="skier1.info.age"
        type="number"
        label="Age"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model.number="skier1.info.weight"
        type="number"
        label="Weight (lbs)"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.bootsModel"
        label="Boots Model"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.sole.length"
        label="Sole Length (mm)"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.skierCode"
        label="Skier Code"
      />
      <div>Sole Type</div>
      <q-radio v-model="skier1.gear.sole.type" val="ALPINE" label="ALPINE" />
      <q-radio v-model="skier1.gear.sole.type" val="WTR" label="WTR" />
      <q-radio v-model="skier1.gear.sole.type" val="AT" label="AT" />
      <div>Age Group</div>
      <q-radio v-model="skier1.gear.sole.ageGroup" val="ADULT" label="Adult" />
      <q-radio
        v-model="skier1.gear.sole.ageGroup"
        val="CHILDREN"
        label="Children"
      />
      <div>Binding Type</div>
      <q-radio v-model="skier1.gear.bindingType" val="ALPINE" label="ALPINE" />
      <q-radio
        v-model="skier1.gear.bindingType"
        val="DUAL/WTR"
        label="DUAL/WTR"
      />
      <q-radio v-model="skier1.gear.bindingType" val="AT" label="AT" />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.skiSnowboard"
        label="Skis / Snowboard"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.boots"
        label="Boots"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.poles"
        label="Poles"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.techSignature"
        label="Tech Signature"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier1.gear.helmet"
        label="Helmet / Other"
      />

      <hr />
      <h5>Skier/Rider 2</h5>
      <div>Skier Type</div>
      <q-radio v-model="skier2.info.type" :val="1" label="I" />
      <q-radio v-model="skier2.info.type" :val="2" label="II" />
      <q-radio v-model="skier2.info.type" :val="3" label="III" />
      <div>Rider</div>
      <q-radio v-model="skier2.info.rider" val="reg" label="Regular" />
      <q-radio v-model="skier2.info.rider" val="goofy" label="Goofy" />
      <q-input
        class="q-pa-sm"
        filled
        v-model.number="skier2.info.age"
        type="number"
        label="Age"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model.number="skier2.info.weight"
        type="number"
        label="Weight (lbs)"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.bootsModel"
        label="Boots Model"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.sole.length"
        label="Sole Length (mm)"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.skierCode"
        label="Skier Code"
      />
      <div>Sole Type</div>
      <q-radio v-model="skier2.gear.sole.type" val="ALPINE" label="ALPINE" />
      <q-radio v-model="skier2.gear.sole.type" val="WTR" label="WTR" />
      <q-radio v-model="skier2.gear.sole.type" val="AT" label="AT" />
      <div>Age Group</div>
      <q-radio v-model="skier2.gear.sole.ageGroup" val="ADULT" label="Adult" />
      <q-radio
        v-model="skier2.gear.sole.ageGroup"
        val="CHILDREN"
        label="Children"
      />
      <div>Binding Type</div>
      <q-radio v-model="skier2.gear.bindingType" val="ALPINE" label="ALPINE" />
      <q-radio
        v-model="skier2.gear.bindingType"
        val="DUAL/WTR"
        label="DUAL/WTR"
      />
      <q-radio v-model="skier2.gear.bindingType" val="AT" label="AT" />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.skiSnowboard"
        label="Skis / Snowboard"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.boots"
        label="Boots"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.poles"
        label="Poles"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.techSignature"
        label="Tech Signature"
      />
      <q-input
        class="q-pa-sm"
        filled
        v-model="skier2.gear.helmet"
        label="Helmet / Other"
      />
    </q-form>
    <div class="agreement">
      <div class="heading q-pa-md text-h4">
        Warning / Liability Release & Agreement Not to SUE
      </div>
      <div class="content">
        <p>
          I have received the equipment listed on thsi agreement and have been
          instructed on its use. I verify that the personal information (height,
          weight, age, skier classification) on this tickets is correct. If at
          any time I feel the equipment is not functioning properly, I will stop
          using it and return it for inspection, repair or adjustments.
        </p>
        <p>
          I understand and agree that skiing, snowboarding and other winter
          sports are HAZARDOUS activites, that INJURIES from various causes are
          an INHERENT RISK of participating in these activities, and that
          injuries to any or all parts of my body are a COMMON AND ORDINARY
          OCCURENCE during these activities. I freely accept and ASSUME ALL
          RISKS OF INJURY OR DEATH that may occur while using this equipment.
        </p>
        <p>
          ALPINE SYSTEMS: I have confirmed that the visual release indicators on
          the alpine ski bindings are the same as those designated on this
          ticket. I understand and agree that alpine ski/boot/binding systems
          CANNOT RELEASE OR RETAIN in all situations where release or retention
          may prevent injury, that they therefore CANNOT GUARANTEE MY SAFETY,
          and that undesired release or retention are inherent risks of skiing.
        </p>
        <p>
          AT SYSTEMS: I have chosen to use Alpine Touring equipment (AT bindings
          and/or boots), because it provides functions not available with mose
          Alpine equipment, but I understand and agree that AT equipment will
          NOT provide the same release and retention performance as part of a
          ski/boot/binding system as standard Alpine boots and bindings.
        </p>
        <p>
          SNOWBOARDS AND X-C: I understand that the binding systems on
          snowboards and cross-country skis are NOT INTENDED TO RELEASE in a
          fall or upon impact.
        </p>
        <p>
          HELMETS: I understand and agree that no headgear can protect against
          all foreseeable impacts, that skiing and snowboarding can expose the
          user to forces which exceed the limits of protection offered by this
          helmet, that helmets do not guard against injury to the neck, spine,
          face, or any other part of the boddy, and that these features are
          inherent risks of skiing and snowboarding. Helmets must be properly
          fitter to each user, and I agree that this helmet has been properly
          fitted by the provider. I warrant that the helmet is comfortably snug
          and that when I fasten the chin strap and shake my head there is no
          significant movement of the helmet. I agree that if the helmet is
          damaged or involved in any kind of accident, I will stop using it
          immediately, return it to the shop and report the accident or damage.
        </p>
        <p>
          To the fullest extent allowed by the law, I agree to RELEASE FROM
          LIABILITY, and to INDEMNIFY AND HOLD HARMLESS The Rossignol Group, and
          all other manufacturers and distributors of the equipment provided to
          me under this agreement, any involved wintewr sport area, shop or
          service technician, and their owners, agents, employers and employees
          for any injuries, damages or death related to the use of this
          equipment. I FURTHER AGREE NOT TO MAKE A CLAIM OR SUE FOR INJURIES OR
          DAMAGES RELATING TO THE USE OF THIS EQUIPMENT, whether such claim is
          based on NEGLIGENCE, breach of warranty, product defect or any other
          theory. I accpt this equipment AS IS with no warranties, express or
          implied. These waivers and obligations extend to my heirs and assigns.
        </p>
        <p>
          THIS DOCUMENT IS A LEGALLY BINDING CONTRACT which supersedes any other
          agreements or representations by or between the parties. It shall be
          interpreted to provide as broad and inclusive a release of liability
          as is legally possible, but is not intended to assert any claims or
          defenses which are prohibited by law. If any part of this agreement is
          deemed void or unenforceable, the remainder shall be given full force
          and effect. The specific rights of the parties under this contract may
          vary from state to state.
        </p>
        <p>
          If this equipments is to be used by soemone other than me, I certiufy
          trhat I am signing it as agent, parent or legal guardian for the user
          and that I will provide this form and all warnings and information to
          the user.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      skier1type: null,
      skier1rider: '',
      skier1age: null,
      skier1height: null,
      skier1weight: null,
      skier1bootsModel: '',
      skier1bindingType: '',
      skier1soleLength: null,
      skier1soleType: '',
      skier1ageGroup: '',
      skier1Code: '',
      skier1skiSnowboard: '',
      skier1poles: '',
      skier1helmet: '',
      skier1techSignature: '',
      skier1boots: '',
      skier2type: null,
      skier2rider: '',
      skier2age: null,
      skier2height: null,
      skier2weight: null,
      skier2bootsModel: '',
      skier2bindingType: '',
      skier2soleLength: null,
      skier2soleType: '',
      skier2ageGroup: '',
      skier2Code: '',
      skier2skiSnowboard: '',
      skier2poles: '',
      skier2helmet: '',
      skier2techSignature: '',
      skier2boots: ''
    }
  }
}
</script>

<style scoped>
.form3 {
  box-sizing: border-box;
}

.card {
  max-width: 750px;
  margin: 0 auto;
}

.form {
  flex: 1;
}

.agreement {
  display: inline-block;
  background-color: wheat;
  width: calc(65ch + 6rem);
  background-color: rgb(11, 86, 105);
}

.agreement .heading {
  text-align: center;
  color: white;
}

.agreement .content {
  font-size: 14px;
  margin: 2rem 2rem;
  padding: 1rem;
  max-width: calc(65ch + 2rem);
  color: white;
}
</style>
