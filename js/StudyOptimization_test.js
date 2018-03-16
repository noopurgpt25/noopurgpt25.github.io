var ctx = document.getElementById('barChart1');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HCI-HW-CP',"AI-Lab3","AI-Reading-CH3"],
    datasets: [
    {
      label: 'Completed',
      data: [40,20,20,0,100],
      backgroundColor: [
      'rgba(255, 255, 0, 0.6)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',

      ],
      borderColor: [
      'rgba(255,215,0,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'To DO',
      data: [60,80,80,0,0],
      borderColor: [
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      ],
      borderWidth: 1
    },

    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
});

var ctxB4 = document.getElementById('barChart4');

var myBarChart4 = new Chart(ctxB4, {
  type: 'bar',
  data: {
    labels: ['HCI-HW-PP',"HCI-Reading-Graph"],
    datasets: [
    {
      label: 'Completed',
      data: [80,60,0,100],
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 99, 132, 0.2)',

      ],
      borderColor: [
      'rgba(255,99,132,1)',
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',

      ],
      borderWidth: 1
    },
    {
      label: 'To DO',
      data: [20,40,80,0,0],
      borderColor: [
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      ],
      borderWidth: 1
    },

    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
});
var ctxB2 = document.getElementById('barChart2');

var myBarChart2 = new Chart(ctxB2, {
  type: 'bar',
  data: {
    labels: ["HCI-HW-CP", "AI-Lab3","AI-Reading-CH3"],
    datasets: [
    {
      label: 'Completed',
      data: [40,40,20,0,100],
      backgroundColor: [
      'rgba(255, 255, 0, 0.6)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
      'rgba(255,215,0,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'To DO',
      data: [60,60,80,0,0],
      borderColor: [
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      ],
      borderWidth: 1
    },

    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
});

var ctxB3 = document.getElementById('barChart3');

var myBarChart3 = new Chart(ctxB3, {
  type: 'bar',
  data: {
    labels: ["AI-Lab3","AI-Reading-CH3"],
    datasets: [
    {
      label: 'Completed',
      data: [40,20,0,100],
      backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [

      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'To DO',
      data: [60,80,0,0],
      borderColor: [
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      'rgba(192,192,192,1)',
      ],
      borderWidth: 1
    },

    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
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
