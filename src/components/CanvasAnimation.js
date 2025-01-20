// src/components/CanvasAnimation.js
import React, { useEffect } from "react";

function CanvasAnimation() {
  useEffect(() => {
    const canvas = document.getElementById("nokey");
    const ctx = canvas.getContext("2d");

    const BALL_NUM = 50;
    const balls = [];
    const RADIUS = 2;
    const dis_limit = 260;

    function randomNum(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createBall() {
      const speed = [randomNum(-1, 1), randomNum(-1, 1)];
      return {
        x: randomNum(0, canvas.width),
        y: randomNum(0, canvas.height),
        vx: speed[0],
        vy: speed[1],
        r: RADIUS,
        alpha: 1,
        phase: randomNum(0, 10),
      };
    }

    function renderBalls() {
      balls.forEach((ball) => {
        ctx.fillStyle = `rgba(207, 255, 4, ${ball.alpha})`;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      });
    }

    function renderLines() {
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const dx = balls[i].x - balls[j].x;
          const dy = balls[i].y - balls[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < dis_limit) {
            const alpha = 1 - distance / dis_limit;
            ctx.strokeStyle = `rgba(150, 150, 150, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function updateBalls() {
      balls.forEach((ball) => {
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x < 0 || ball.x > canvas.width) ball.vx *= -1;
        if (ball.y < 0 || ball.y > canvas.height) ball.vy *= -1;

        ball.phase += 0.03;
        ball.alpha = Math.abs(Math.cos(ball.phase));
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      renderBalls();
      renderLines();
      updateBalls();
      requestAnimationFrame(animate);
    }

    function initializeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      balls.length = 0;
      for (let i = 0; i < BALL_NUM; i++) {
        balls.push(createBall());
      }
    }

    initializeCanvas();
    animate();

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initializeCanvas();
      }, 200);
    });

    return () => {
      window.removeEventListener("resize", initializeCanvas);
    };
  }, []);

  return <canvas id="nokey"></canvas>;
}

export default CanvasAnimation;
