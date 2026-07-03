<template>
	<view class="flex diygw-col-24">
		<view @tap="play" class="diygw-avatar music-avatar radius margin-right-xs"
			:class="[avatarType=='icon'?icon:'',backgroundClazz,avatarType!='img'&&backgroundClazz==''?'gradual-green':'',avatarType=='img'&&backgroundClazz==''?'bg-none':'',sizeClz,isPlaying?'music-play':'music-pause']"
			:style="style">
			<image v-if="avatarType=='img'" mode="aspectFit" class="diygw-avatar-img radius" :src="poster"></image>
			<view v-if="avatarType=='text'">{{text}}</view>
		</view>
		<view v-if="isTitle || isSilder" class="flex flex-direction-column flex-sub"
			:class="isTitle&&isSilder?'justify-between':'justify-center'">
			<view v-if="isTitle">{{ author }}</view>
			<view v v-if="isSilder" class="flex align-center flex-sub">
				<view class="flex-shrink-0 margin-right-lg">{{ getMinuteTime(currentTime) }}</view>
				<slider class="flex-sub" :value="position" min="0" max="100" :active-color="activeColor"
					@change="onchange"></slider>
				<view class="flex-shrink-0 margin-left-xs margin-right-xs">{{ getMinuteTime(duration) }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "diy-audio",
		emits: ["play", "end", "pause"],
		props: {
			music: {
				type: String,
				default: ''
			},
			poster: {
				type: String,
				default: ''
			},
			author: {
				type: String,
				default: ''
			},
			autoplay: {
				type: Boolean,
				default: false
			},
			loop: {
				type: Boolean,
				default: false
			},
			sizeClz: {
				type: String,
				default: "",
			},
			avatarType: {
				type: String,
				default: "icon",
			},
			icon: {
				type: String,
				default: "diy-icon-musicfill",
			},
			text: {
				type: String,
				default: "♪",
			},
			backgroundClazz: {
				type: String,
				default: "",
			},
			avatarBackgroundColor: {
				type: String,
				default: "",
			},
			avatarColor: {
				type: String,
				default: "",
			},
			isTitle: {
				type: [Boolean, String],
				default: false,
			},
			isSilder: {
				type: [Boolean, String],
				default: false,
			},
			activeColor: {
				type: String,
				default: "",
			}
		},
		computed: {
			style() {
				let style = {}
				if (this.avatarType != 'img') {
					style['backgroundImage'] = "none !important"
				}
				if (this.avatarBackgroundColor) {
					style['backgroundColor'] = this.avatarBackgroundColor + " !important"
				}
				if (this.avatarColor) {
					style['color'] = this.avatarColor + " !important"
				}
				return style
			}
		},
		watch:{
			music:{
				immediate:true,
				handler:function(newvalue,oldValue){
					if(newvalue!=oldValue&&oldValue){
						this.uninstall()
						setTimeout(()=>{
							this._audioContext = null;
							this.createAudio();
						},100)
					}
				}
			}
		},
		data() {
			return {
				h5Play: true,
				isPlaying: false,
				isPlayEnd: false,
				position: 0,
				currentTime: 0,
				duration: 0
			};
		},
		mounted() {
			this._audioContext = null;
			this.createAudio();
		},
		// #ifndef VUE3
		// TODO vue2
		destroyed() {
			this.uninstall()
		},
		// #endif
		// #ifdef VUE3
		// TODO vue3
		unmounted() {
			this.uninstall()
		},
		// #endif
		methods: {
			uninstall() {
				if (this._audioContext != null && this.isPlaying) {
					this.stop();
				}
			},
			changeTime(){
				let innerAudioContext = this._audioContext;
				this.currentTime = innerAudioContext.currentTime || 0;
				this.duration = innerAudioContext.duration;
				if(this.duration){
					this.position = parseInt((this.currentTime / this.duration * 100).toString())
				}else{
					this.position = 0;
				}
			},
			createAudio() {
				this.duration = 0;
				this.currentTime = 0;
				this.position = 0;
				this.isPlaying = false;
				this.isPlayEnd = false;
				let innerAudioContext = this._audioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = this.autoplay;
				innerAudioContext.src = this.music;
				// 由于部分浏览器限制，不能自动播放
				// #ifdef H5
				document.body.addEventListener('touchstart',this.initPlay,false);
				document.body.addEventListener('click',this.initPlay,false);
				// #endif

				innerAudioContext.onPlay(() => {
					if(!this.isPlaying){
						this.$emit('play')
					}
				    this.isPlaying = true
					// console.log('开始播放');
				});
				innerAudioContext.onTimeUpdate((e) => {
					 this.changeTime()
				});
				innerAudioContext.onSeeked((e) => {
					 this.changeTime()
				});
				innerAudioContext.onEnded(() => {
					this.currentTime = 0;
					this.isPlaying = false;
					this.isPlayEnd = true;
					this.$emit('end')
				});
				innerAudioContext.onError((res) => {
					this.isPlaying = false;
				});
				return innerAudioContext;
			},
			onchange(e) {
				let second =  e.detail.value / 100 * this.duration
				this._audioContext.seek(second);
			},
			// #ifdef H5
			initPlay(){
				if(this.autoplay&&this.h5Play){
					this.h5Play = false
					this.play()
					document.body.removeEventListener('touchstart',this.initPlay,false)
					document.body.removeEventListener('click',this.initPlay,false)
				}
			},
			// #endif
			play() {
				if (this.isPlaying) {
					this.pause();
					return;
				}
				this.isPlaying = true;
				this._audioContext.play();
				this.isPlayEnd = false;
				
			},
			pause() {
				this._audioContext.pause();
				this.isPlaying = false;
				this.$emit('pause')
			},
			stop() {
				this._audioContext.stop();
				this.isPlaying = false;
				this.$emit('stop')
			},
			// 秒转换分秒
			getMinuteTime(result) {
				const h =
					Math.floor(result / 3600) < 10 ?
					'0' + Math.floor(result / 3600) :
					Math.floor(result / 3600);
				const m =
					Math.floor((result / 60) % 60) < 10 ?
					'0' + Math.floor((result / 60) % 60) :
					Math.floor((result / 60) % 60);
				const s =
					Math.floor(result % 60) < 10 ?
					'0' + Math.floor(result % 60) :
					Math.floor(result % 60);
				if (h === '00') return m + ':' + s;
				return h + ':' + m + ':' + s;
			}
		}
	}
</script>

<style lang="scss">
	.music-play {
		-webkit-animation: music 2s infinite linear;
		animation: music 2s infinite linear;
	}

	.music-pause {
		animation-play-state: paused;
	}

	@-webkit-keyframes music {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(359deg);
			transform: rotate(359deg);
		}
	}

	@keyframes music {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(359deg);
			transform: rotate(359deg);
		}
	}
</style>
