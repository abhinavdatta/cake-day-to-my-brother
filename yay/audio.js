
myAudio = new Audio('yay/happy.mp3'), allow="autoplay"; 
if (typeof myAudio.loop == 'boolean')
{
myAudio.loop = true;
}
else
{
myAudio.addEventListener('ended', function() {
 this.currentTime = 0;
this.play();
}, false);
}
myAudio.play();

