!function defineAnimation(Global) {
    function Animation(fps, frames) {
        this.frame = 0;
        this.frames = frames != undefined ? frames : [];
        this.frameCount = this.frames.length;

        this.duration = 1000 / fps;
        this.elapsedTime = 0;
    }
    Animation.prototype.frame = 0;
    Animation.prototype.frames = null;
    Animation.prototype.frameCount = 0;
    Animation.prototype.duration = 0;
    Animation.prototype.paused = false;

    Animation.prototype.play = function animationPlay() {
        this.paused = false;
    };
    Animation.prototype.pause = function animationStop() {
        this.paused = true;
    };
    Animation.prototype.stop = function animationStop() {
        this.paused = true;
        this.frame = 0;
    };

    Animation.prototype.update = function animationUpdate(dt) {
        if (this.paused) {
            return this.frames[this.frame];
        }

        this.elapsedTime += dt;
        if (this.elapsedTime > this.duration) {
            this.frame += 1;
            this.frame = this.frame % this.frameCount;

            this.elapsedTime = 0;
        }

        return this.frames[this.frame];
    };

    Global.Animation = Animation;
}(window);
