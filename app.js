var movies =[
  {title:"In Brutes",
  rating:5,
  hasWatched:true},
  
  {title:"Frozen",
  rating: 4.5,
  hasWatched: false },
  
  {title: "Mad Max Furry Road",
  rating: 5,
  hasWatched: true },
  
  {title: "Less Miserables",
  rating: 3.5 ,
  hasWatched: false }
  ];


  var haveSeenTrue = "You have seen the movie";
  var haveSeenFalse = "You have not seen the movie";
  
  movies.forEach(function(movie){
    if(movie.hasWatched === true){
      document.write(haveSeenTrue + " "+ movie.title +" - " + movie.rating + " stars");
    }
    
    else{
      document.write(haveSeenFalse + " "+ movie.title +" - " + movie.rating + " stars");
    }
  });
