Vue.createApp({})
	.component('notification-message', {
		template: '#notification-message-template',
		props: {
			type: { type: String, default: 'info' },
			header: { type: String, default: 'Информация' },
		},
		data() {
			return {
				hidden: false,
			}
		},
		methods: {
			hide() {
				this.hidden = true
			},
		},
	})
	.mount('#app')
