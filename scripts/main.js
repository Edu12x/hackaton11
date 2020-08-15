      // Calculadora
      const lis = document.querySelectorAll("li");
      lis.forEach(function (element) {
        element.setAttribute(
          "style",
          "color: white; font-weight: bold; border-radius: 5px; width: 10px; margin:2px"
        );
      });

      const main_screen = document.querySelector(".js_main_screen");
      main_screen.setAttribute(
        "style",
        "background-color:gray ; padding: 10px; font-size:20px; margin-bottom:10px; text-align:right; font-weight:bold ;height:20px"
      );

      const historial_screen = document.querySelector(".js_screen_historial");
      historial_screen.setAttribute(
        "style",
        "background-color:gray ; padding: 5px; font-size:13px; text-align:right; height:15px"
      );

      const number = document.querySelectorAll(".js_number");
      const sign = document.querySelectorAll(".js_sign");
      const result = document.querySelector(".js_result");
      const reset = document.querySelector(".js_reset");
      const historial = document.querySelector(".js_historial");

      number.forEach(function (num) {
        num.onclick = function () {
          main_screen.textContent = main_screen.textContent.concat(
            this.textContent
          );
        };
      });

      sign.forEach(function (num) {
        num.onclick = function () {
          main_screen.textContent = main_screen.textContent.concat(
            this.textContent
          );
        };
      });

      try {
        result.onclick = function () {
          historial_screen.textContent = main_screen.textContent;
          main_screen.textContent = eval(main_screen.textContent);

          const historial2 = document.createElement("h3");
          historial2.innerHTML = `
          <p> ${historial_screen.textContent} </p>
          `;
          historial.appendChild(historial2);

          const historial1 = document.createElement("h2");
          historial1.innerHTML = `
          <p> ${eval(main_screen.textContent)} </p>
          `;
          historial.appendChild(historial1);
        };
      } catch (error) {
        main_screen.textContent = "ERROR";
      }

      reset.onclick = function () {
        main_screen.textContent = "";
        historial_screen.textContent = "";
      };

      historial.setAttribute(
        "style",
        "width:300px; text-align:right; overflow:scroll; height:411px; margin-left:10px"
      );

      //   Lista de Actividades

      const activityList = document.querySelector(".js_ActivityList");
      const add = activityList.querySelector(".js_listAdd");
      const button = activityList.querySelector(".js_button");
      const form = activityList.querySelector("form");

      activityList.setAttribute(
        "style",
        "width:100%; text-align:center;margin:0 10%; position:relative"
      );
      add.setAttribute(
        "style",
        "margin: 10px 0 ;padding:5px; border-radius: 4px; border:Solid gray 1px; width:100%"
      );
      button.setAttribute(
        "style",
        "margin: 10px 0 ;padding:5px; border-radius: 4px; border:none; width:70px; background-color:skyblue; color:white; font-weight:bold; position:absolute; right:0; cursor: pointer"
      );

      form.onsubmit = function (send) {
        send.preventDefault();
        const activity = add.value;
        let list = document.createElement("li");
        list.classList.add("js_list");
        list.innerHTML = `${activity} <div><button class='check'>Ok</button> <button class='remove'>X</button></div>`;
        container.appendChild(list);
        list.querySelector(".remove").onclick = function () {
          this.closest(".js_list").remove();
        };
        list.querySelector(".check").onclick = function () {
          this.closest(".js_list").setAttribute(
            "style",
            "display:flex; justify-content:space-between; text-decoration:line-through ;color:blue; font-style:italic"
          );
        };

        list.setAttribute(
          "style",
          "display:flex; justify-content:space-between"
        );

        form.reset();
      };