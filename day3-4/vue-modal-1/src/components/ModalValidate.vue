<template>
    <modal
        title="Modal with form"
        @close="[
        $emit('close'),
        name = '',
        email = '',
        password = '',
        passCtrl = '',
        $v.$reset()
            ]">
        
        <div slot="body">
          <form @submit.prevent="onSubmit">

            <!-- name -->
            <div class="form-item" :class="{errorInput: $v.name.$error}">
              <label>Name:</label>
                <p class="errorText" v-if="!$v.name.required">Field is required</p>
                <p class="errorText" v-if="!$v.name.minLength">Name must have more than {{$v.name.$params.minLength.min}} characters !</p>
              <input v-model="name" :class="{error: $v.name.$error}" @change="$v.name.$touch">
            </div>

            <!-- email -->
            <div class="form-item" :class="{errorInput: $v.email.$error}">
              <label>Email:</label>
                <p class="errorText" v-if="!$v.email.required">Email is required</p>
                <p class="errorText" v-if="!$v.email.email">Email form incorrect</p>
              <input v-model="email" :class="{error: $v.email.$error}" @change="$v.email.$touch">
            </div>

            <!-- passwords -->
            <div class="form-item" :class="{errorInput: $v.password.$error}">
              <label>Password:</label>
                <p class="errorText" v-if="!$v.password.required">Password is required</p>
                <p class="errorText" v-if="!$v.password.minLength">Password must have more than {{$v.password.$params.minLength.min}} characters</p>
              <input v-model="password" :class="{error: $v.password.$error}" @change="$v.password.$touch">
            </div>

            <div class="form-item" :class="{errorInput: $v.passCtrl.$error}">
              <label>Confirm Password:</label>
                <p class="errorText" v-if="!$v.passCtrl.sameAsPassword">Passwords must be identical</p>
              <input v-model="passCtrl" :class="{error: $v.passCtrl.$error}" @change="$v.passCtrl.$touch">
            </div>
              <button class="btn btnPrimary">Submit!</button>
            
          </form>
        </div>

    </modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'

export default {
    components: {
        modal
    },
    data(){
      return{
        name: '',
        email: '',
        password: '',
        passCtrl: ''
      }
    },
    validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    passCtrl: {
      sameAsPassword: sameAs('password')
    },
  },
  methods:{
    onSubmit(){
      this.$v.$touch()
      if (!this.$v.$invalid){
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          passCtrl: this.passCtrl
        }
        console.log(user)
      }
      this.name = ''
      this.email = ''
      this.password = ''
      this.passCtrl = ''
      this.$v.$reset()
      this.$emit('close')
    }
  }
}
</script>       

<style lang="scss">
.form-item .errorText{
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: red;
}

.form-item {
  &.errorInput .errorText{
    display: block;}
}

input.error{
  border-color: red;
}
</style>