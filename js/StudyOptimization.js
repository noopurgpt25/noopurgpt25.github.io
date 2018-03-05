   //global variables
   var ctxB1 = document.getElementById("barChart1").getContext('2d');
   var myBarChart1 = new Chart(ctxB1, {
    type: 'bar',
    data: {
      labels: ["HCI-HW-CP", "AI-Lab3","AI-Reading-CH3"],
      datasets: [{
        label: 'Progress',
        data: [40,20,20,0,100],
        backgroundColor: [
        'rgba(255, 255, 0, 0.6)',
        'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
        'rgba(255,215,0,1)',
        'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }]
    },
    optionss: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

   var ctxB4 = document.getElementById("barChart4").getContext('2d');
   var myBarChart4 = new Chart(ctxB4, {
    type: 'bar',
    data: {
      labels: ["HCI-HW-PP", "HCI-Reading-Graph"],
      datasets: [{
        label: 'Progress',
        data: [80,60,0,100],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }]
    },
    optionss: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

   //global variables
   var ctxB2 = document.getElementById("barChart2").getContext('2d');
   var myBarChart2 = new Chart(ctxB2, {
    type: 'bar',
    data: {
      labels: ["HCI-HW-CP", "AI-Lab3","AI-Reading-CH3"],
      datasets: [{
        label: 'Progress',
        data: [40,40,20,0,100],
        backgroundColor: [
        'rgba(255, 255, 0, 0.6)',
        'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
        'rgba(255,215,0,1)',
        'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }]
    },
    optionss: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
   var ctxB3 = document.getElementById("barChart3").getContext('2d');
   var myBarChart3 = new Chart(ctxB3, {
    type: 'bar',
    data: {
      labels: ["AI-Lab3","AI-Reading-CH3"],
      datasets: [{
        label: 'Progress',
        data: [40,20,0,100],
        backgroundColor: [

        'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [

        'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }]
    },
    optionss: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });


   $(document).ready(function(){
        var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
          format: 'mm/dd/yyyy',
          container: container,
          todayHighlight: true,
          autoclose: true,
        })
      })



//check validation of add task form
var tasks = [];
var progress = 0
function checkTaskValidation(my_addr) {
  var title = document.getElementById("input-title").value;
  var course = document.getElementById("input-course").value;
  var deadline = document.getElementById("date").value;

  if (title == ""||title == null)
  {
    alert("Please fill the title");
    return false;
  }

  else if (course==""||course==null)
  {
    alert("Please fill the course");
    return false;
  }


  else if (deadline==""||deadline==null)
  {
    alert("Please fill a valid deadline");
    return false;
  }
  else if(my_addr==1)
  {
    window.location.href="TaskPage1.html"
  }
  else if(my_addr==2)
  {
    window.location.href="TaskPage2.html"
  }
  else if(my_addr==3)
  {
    window.location.href="TaskPage1-2.html"
  }
  else if(my_addr==4)
  {
    window.location.href="TaskPage2-2.html"
  }
  // return true;
}
