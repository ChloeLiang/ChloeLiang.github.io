$(document).ready(function() {

  /* Scroll on buttons */
  $('.js--scroll-to-about').click(function () {
     $('html, body').animate({scrollTop: $('.js--about').offset().top}, 1000);
  });


  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'radar',

      // The data for our dataset
      data: {
          labels: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Objective-C', 'C/C++', 'Python'],
          datasets: [{
            backgroundColor: "transparent",
            borderColor: "#22c9f6",
            fill: false,
            radius: 5,
            pointRadius: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: "#22c9f6",
            pointBorderColor: "#22c9f6",
            pointHoverRadius: 8,
            data: [8, 9, 8, 9, 8, 7, 7, 7]
          }]
      },

      // Configuration options go here
      options: {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 3,
                max: 10,
                stepSize: 1
            },
            pointLabels: {
                fontSize: 14
            }
        },
        legend: {
            display: false
        }
    }
  });

});