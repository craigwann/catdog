$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

    $(".cat").click(function() {
      $("ul#cat").prepend("<li>Meow!</li>");
      $("ul#dog").prepend("<li>Woof!</li>");

      $("ul#cat").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#dog").children("li").first().click(function() {
        $(this).remove();
      });
    });

    $(".dog").click(function() {
      $("ul#dog").prepend("<li>Woof!</li>");
      $("ul#cat").prepend("<li>Meow!</li>");

      $("ul#cat").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#dog").children("li").first().click(function() {
        $(this).remove();
      });
    });

    $("button#cat-img").click(function() {
      $("#catimage").after('<img src="img/cat.jpeg" alt="image of cat">');
      $("img").click(function() {
        $(this).remove();
      });
    });

    $("button#dog-img").click(function() {
      $("#dogimage").after('<img src="img/dog.jpg" alt="image of dog">');
      $("img").click(function() {
        $(this).remove();
      });
    });

});
