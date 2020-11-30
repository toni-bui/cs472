$(function() {

    const randomPosition = () => ({
        x: Math.floor(Math.random() * screen.width / 2 ),
        y : Math.floor(Math.random() * screen.height / 4)
    });

    const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

    function createCircle(width, growthSize, growthRate) {
        let circle = $('<div class="circle"></div>');
        let pos = randomPosition();
        let color = randomColor();
        circle.css({
            width: width + 'px',
            height: width + 'px',
            backgroundColor: color
        });
        circle.offset({
            left: pos.x,
            top: pos.y
        });
        let intervalId = startAmination(circle, growthSize, growthRate);
        circle.click(function(e) {
            clearInterval(intervalId);
            this.remove();
        });
        return circle;
    }

    $('#btnStart').click(function(e) {
        $('.circle').click();
        let noCircle = 3;
        let width = 50;
        let growthSize = 10;
        let growthRate = 100;
        try {
            let txtWidth = $('#width').val();
            let txtNoCircle = $('#noCircle').val()
            let txtGrowthSize = $('#growthSize').val()
            let txtGrowthRate = $('#growthRate').val()
            if (!txtWidth|| !txtNoCircle|| !txtGrowthSize|| !txtGrowthRate) {
                throw new Exception();
            }
            width = parseInt(txtWidth);
            noCircle = parseInt(txtNoCircle);
            growthSize = parseInt(txtGrowthSize);
            growthRate = parseInt(txtGrowthRate);
        } catch (ex) {
            alert("Please correct input data");
            return;
        }
        let body = $(document.body);
        for (let i = 0; i < noCircle; ++i) {
            body.append(createCircle(width, growthSize, growthRate));
        }
    });

    function startAmination(circle, growthSize, growthRate) {
        intervalId = setInterval(function() {
            let width = circle.width()
            circle.css({
                width: width + growthSize + 'px',
                height: width + growthSize + 'px',
            });
            circle.offset({
                top: circle.offsetX,
                left: circle.offsetY
            });
        }, growthRate);
        return intervalId;
    }

    $('#btnClear').click(() => $('.circle').click());
});