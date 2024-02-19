const hamBurger = document.querySelector(".toggle-btn");
const menuIcon = document.querySelector(".toggle_menu");
const openModalBtn = document.querySelector('.profile_modal');
const share =  document.querySelector('#share');
const basket =  document.querySelector('#basket');
const program =  document.querySelector('#program');
const history =  document.querySelector('#history');
const property =  document.querySelector('#property');
const certificate =  document.querySelector('#certificate');
const property1 =  document.querySelector('#property1');
const tracker =  document.querySelector('#tracker');
const recent =  document.querySelector('#recent');
const schedule =  document.querySelector('#schedule');
// 
const own_share =  document.querySelector('#own_shares');
const own_basket =  document.querySelector('#own_gift');
const own_program =  document.querySelector('#own_program');
const own_history =  document.querySelector('#own_history');
const own_property =  document.querySelector('#own_property');
const own_certificate =  document.querySelector('#own_certificate');
const own_property1 =  document.querySelector('#own_property1');
const own_tracker =  document.querySelector('#own_tracker');
const own_recent =  document.querySelector('#own_recent');
const own_schedule =  document.querySelector('#own_schedule');


let sidebarOpen = false;


const sidebar = document.getElementById('sidebar');

hamBurger?.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.add("expand");
});


function openSidebar() {
  
    sidebar.classList.toggle('enlarge');
    menuIcon.classList.remove('menu-icon')
    menuIcon.classList.add('displayInline')

}

function closeSidebar() {
    sidebar.classList.remove('enlarge');
    menuIcon.classList.add('menu-icon')
}
function openModalPofile() {
    openModalBtn.classList.toggle('display_profile');
}
function handleShare() {
  share.classList.add('active');
  basket.classList.remove('active');
  program.classList.remove('active');
  history.classList.remove('active');

  own_share.classList.remove('d_gift');
  own_basket.classList.add('d_gift');
  own_program.classList.add('d_gift');
  own_history.classList.add('d_gift');
  
}
function handleBasket() {
  basket.classList.add('active');
  share.classList.remove('active');
  program.classList.remove('active');
  history.classList.remove('active');
  // content
  own_basket.classList.remove('d_gift');
  own_share.classList.add('d_gift');
  own_program.classList.add('d_gift');
  own_history.classList.add('d_gift');

}
function handleProgram() {
  program.classList.add('active');
  basket.classList.remove('active');
  share.classList.remove('active');
  history.classList.remove('active');

  own_program.classList.remove('d_gift');
  own_basket.classList.add('d_gift');
  own_share.classList.add('d_gift');
  own_history.classList.add('d_gift');
}
function handleHistory() {
  history.classList.add('active');
  program.classList.remove('active');
  basket.classList.remove('active');
  share.classList.remove('active');

  own_history.classList.remove('d_gift');
  own_program.classList.add('d_gift');
  own_basket.classList.add('d_gift');
  own_share.classList.add('d_gift');
}
function handleProperty() {
  property.classList.add('active');
  certificate.classList.remove('active');

  own_property.classList.remove('d_gift');
  own_certificate.classList.add('d_gift');
  
}
function handleCertificate() {
  certificate.classList.add('active');
  property.classList.remove('active');
  

  own_certificate.classList.remove('d_gift');
  own_property.classList.add('d_gift');
}


function handleProperty1() {
  property1.classList.add('active');
  tracker.classList.remove('active');

  own_property1.classList.remove('d_gift');
  own_tracker.classList.add('d_gift');
  
}
function handleTracker() {
  tracker.classList.add('active');
  property1.classList.remove('active');
  recent.classList.add('active');
  schedule.classList.remove('active');
  own_recent.classList.remove('d_gift');
  own_schedule.classList.add('d_gift');
  

  own_tracker.classList.remove('d_gift');
  own_property1.classList.add('d_gift');
}


function handleRecent() {
  recent.classList.add('active');
  schedule.classList.remove('active');

  own_recent.classList.remove('d_gift');
  own_schedule.classList.add('d_gift');
  
}
function handleShedule() {
  schedule.classList.add('active');
  recent.classList.remove('active');
  

  own_schedule.classList.remove('d_gift');
  own_recent.classList.add('d_gift');
}


// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [0, 50, 100, 150, 200,250,300,350,400,450,500,550],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#662D91', '#662D91', '#662D91', '#662D91', '#662D91'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','july','Aug','Sep','Oct','Nov','Dec'],
  },
  // yaxis: {
  //   title: {
  //     text: 'Count',
  //   },
  // },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();