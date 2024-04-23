document.addEventListener('DOMContentLoaded', function() {
  // Add click event listener to the opening screen element
  const openingScreen = document.querySelector('.index-opening-screen');
  if (openingScreen) {
      openingScreen.addEventListener('click', function() {
          // Navigate to the login page (replace 'login.html' with the actual login page URL)
          window.location.href = 'login.html';
      });
  }
});document.addEventListener('DOMContentLoaded', function() {
    // Get the "Sign In" element within the login panel
    const signInElement = document.querySelector('.login-text09');

    // Add click event listener to the "Sign In" element
    signInElement.addEventListener('click', function() {
        // Redirect to home.html when "Sign In" is clicked
        window.location.href = 'home.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.home-vector1');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'map.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.home-vector3');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'sparky.html';
      });
    }
  });
document.addEventListener('DOMContentLoaded', function() {
    // Find the element with the text "Montview Student Union" and add a click event listener
    const montviewLink = document.querySelector('.home-text06');

    if (montviewLink) {
        // Add a click event listener to the Montview Student Union link
        montviewLink.addEventListener('click', function() {
            // Navigate to montview.html when the link is clicked
            window.location.href = 'montview.html';
        });
    }
});

  document.addEventListener('DOMContentLoaded', function() {
    // Find the ASAP link element
    var asapLink = document.querySelector('.asap-text06');

    // Add a click event listener to the ASAP link
    asapLink.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Redirect to ASAP.html
        window.location.href = 'meal.html';
    });
});
  
document.addEventListener('DOMContentLoaded', function() {
    // Find the element with class 'asap-rectangle8'
    var asapElement = document.querySelector('.time-text06');

    // Add a click event listener to the found element
    if (asapElement) {
        asapElement.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Redirect to meal.html
            window.location.href = 'asap.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Find the element representing the "Traditional Chicken Meal Bowl"
    var mealBowlElement = document.querySelector('.meal-text10');

    // Add a click event listener to this element
    if (mealBowlElement) {
        mealBowlElement.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Redirect to meal2.html
            window.location.href = 'meal2.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Find the button element by its text content
    var payButton = document.querySelector('.confirm-text22');

    // Add a click event listener to the button
    payButton.addEventListener('click', function() {
        // Redirect to reorder.html when the button is clicked
        window.location.href = 'reorder.html';
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.reorder-vector3');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'sparky.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-frameiconlocation');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'map.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-frameiconhome');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'home.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.map-vector07');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'home.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.map-vector10');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'sparky.html';
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.tender-text20');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'time.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.meal2-text27');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'meal3.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.meal3-text');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'confirm.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.meal3-text21');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'meal2.html';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.meal2-text26');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'meal.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.meal-text18');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'time.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.time-text08');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'tender.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.profile-text14');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'login.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.time-text04');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'scheduled.html';
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.scheduled-text02');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'meal.html';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.scheduled-text01');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'time.html';
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.montview-woodfireimage3');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'tender.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.asap-text08');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'time.html';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text10');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'login.html';
      });
    }
  });
   document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text10');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'login.html';
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text04');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'email.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text06');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'payment.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.payment-text04');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'sparky.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text13');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'email.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.email-text6');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'sparky.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text14');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'payment.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.sparky-text16');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'login.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.payment-text13');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'card.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.card-text10');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'payment.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.meal-text19');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'meal2.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.reorder-frameiconhome');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'home.html';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const reorderIcon = document.querySelector('.reorder-frameiconlocation');
  
    if (reorderIcon) {
      reorderIcon.addEventListener('click', function () {
        // Redirect to profile.html
        window.location.href = 'map.html';
      });
    }
  });
  