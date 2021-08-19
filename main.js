var images = ["https://images.penguinrandomhouse.com/cover/9781984815064", "https://cdn.dribbble.com/users/1525333/screenshots/4216083/boucle-big.gif" , "https://media2.giphy.com/media/Qxl6LilXMNIejsNFaz/giphy.gif", "https://i.pinimg.com/originals/e4/5e/3d/e45e3d36bcf4a014f4fe073232b19ba8.gif", "https://i.gifer.com/7iks.gif","https://cdn.dribbble.com/users/3142893/screenshots/6690314/me-f.gif","https://i.pinimg.com/originals/6b/7c/f1/6b7cf15c50f8002587c0e66e4e160ce9.gif"];
var names = ["Family Book","Ram Lal", "Sunita Aggarwal", "Hitesh Kumar", "Swati Aggarwal", "Bhavya Aggarwal","Amaira Aggarwal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = images [i];
    document.getElementById("family_member_name").innerHTML = names[i];
}
