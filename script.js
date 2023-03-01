const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content: "Prueba",
      createdAt: "5 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "hendersor",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

function createComment(userName, time, comment, votes) {
  // First part of the comment
  const commentContainer = document.createElement("div");
  commentContainer.classList.add = "commentContainer";

  const commentContainer__info = document.createElement("div");
  commentContainer__info.classList.add = "commentContainer__info";

  const commentContainer__info__name = document.createElement("div");
  commentContainer__info__name.classList.add = "commentContainer__info__name";

  const figure = document.createElement("figure");
  const h2 = document.createElement("h2");
  h2.innerText = userName;
  const p = document.createElement("p");
  p.innerText = time;

  commentContainer__info__name.appendChild(figure);
  commentContainer__info__name.appendChild(h2);
  commentContainer__info__name.appendChild(p);

  commentContainer__info.appendChild(commentContainer__info__name);
  commentContainer.appendChild(commentContainer__info);

  //Second part of the container
  const commentContainer__comment = document.createElement("div");
  commentContainer__comment.classList.add("commentContainer__comment");

  const pComment = document.createElement("p");
  pComment.innerText = comment;
  commentContainer__comment.appendChild(pComment);

  const commentContainer__comment__modify = document.createElement("div");
  commentContainer__comment__modify.classList.add(
    "commentContainer__comment__modify"
  );

  const commentContainer__comment__modify__votes =
    document.createElement("div");
  commentContainer__comment__modify.classList.add(
    "commentContainer__comment__modify__votes"
  );

  const imgPlusIcon = document.createElement("img");
  imgPlusIcon.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521532/interactive-comments-section-main/images/icon-plus_hgbuxm.svg"
  );
  imgPlusIcon.setAttribute("alt", "plus icon");

  const votesNumber = document.createElement("h1");
  votesNumber.innerText = votes;
  const imgMinusIcon = document.createElement("img");
  imgMinusIcon.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521530/interactive-comments-section-main/images/icon-minus_lkzi7d.svg"
  );
  imgMinusIcon.setAttribute("alt", "minus icon");

  commentContainer__comment__modify__votes.appendChild(imgPlusIcon);
  commentContainer__comment__modify__votes.appendChild(votesNumber);
  commentContainer__comment__modify__votes.appendChild(imgMinusIcon);

  commentContainer__comment__modify.appendChild(
    commentContainer__comment__modify__votes
  );

  const commentContainer__comment__modify__reply =
    document.createElement("div");
  commentContainer__comment__modify__reply.classList.add(
    "commentContainer__comment__modify__reply"
  );

  const replyIcon = document.createElement("img");
  replyIcon.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521529/interactive-comments-section-main/images/icon-reply_xmi2ag.svg"
  );
  replyIcon.setAttribute("alt", "edit icon");
  const h2Text = document.createElement("h2");
  h2Text.innerText = "Reply";

  commentContainer__comment__modify__reply.appendChild(replyIcon);
  commentContainer__comment__modify__reply.appendChild(h2Text);
  commentContainer__comment__modify.appendChild(
    commentContainer__comment__modify__reply
  );
}

data.comments.forEach((n) => {
  console.log(n);
});
