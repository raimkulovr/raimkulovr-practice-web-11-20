import Vue from 'vue'

import Message from '@/components/UI/Message.vue'
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'
import Intro from '@/components/UI/Intro.vue'
import PostsList from '@/components/Blog/PostsList.vue'

Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)

Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
Vue.component('Message', Message)