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
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
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

const allCommentsContainer = document.querySelector(".allCommentsContainer");

// DOM manipulation to creating the comment container
function createComment(userName, time, comment, votes) {
  // First part of the comment
  const commentContainer = document.createElement("div");
  commentContainer.setAttribute("class", "commentContainer");

  const commentContainer__info = document.createElement("div");
  commentContainer__info.setAttribute("class", "commentContainer__info");

  const commentContainer__info__name = document.createElement("div");
  commentContainer__info__name.setAttribute(
    "class",
    "commentContainer__info__name"
  );

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
  commentContainer__comment.setAttribute("class", "commentContainer__comment");

  const pComment = document.createElement("p");
  pComment.innerText = comment;
  commentContainer__comment.appendChild(pComment);

  const commentContainer__comment__modify = document.createElement("div");
  commentContainer__comment__modify.setAttribute(
    "class",
    "commentContainer__comment__modify"
  );

  const commentContainer__comment__modify__votes =
    document.createElement("div");
  commentContainer__comment__modify__votes.setAttribute(
    "class",
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
  commentContainer__comment__modify__reply.setAttribute(
    "class",
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
  commentContainer__comment.appendChild(commentContainer__comment__modify);
  commentContainer.appendChild(commentContainer__comment);
  allCommentsContainer.appendChild(commentContainer);
  body.appendChild(allCommentsContainer);
}

function createReply(content, username, time, votes) {
  const commentReplyContainer = document.createElement("div");
  commentReplyContainer.setAttribute("class", "commentReplyContainer");

  const commentReplyContainer__info = document.createElement("div");
  commentReplyContainer__info.setAttribute(
    "class",
    "commentReplyContainer__info"
  );

  const commentReplyContainer__info__name = document.createElement("div");
  commentReplyContainer__info__name.setAttribute(
    "class",
    "commentReplyContainer__info__name "
  );

  const figure = document.createElement("figure");
  const h2 = document.createElement("h2");
  h2.innerText = username;
  const p = document.createElement("p");
  p.innerText = time;

  commentReplyContainer__info__name.appendChild(figure);
  commentReplyContainer__info__name.appendChild(h2);
  commentReplyContainer__info__name.appendChild(p);

  commentReplyContainer__info.appendChild(commentReplyContainer__info__name);
  commentReplyContainer.appendChild(commentReplyContainer__info);
  // Second part of the container/

  const commentReplyContainer__comment = document.createElement("div");
  commentReplyContainer__comment.setAttribute(
    "class",
    "commentReplyContainer__comment"
  );

  const Pcomment = document.createElement("p");
  Pcomment.innerText = content;
  commentReplyContainer__comment.appendChild(Pcomment);

  const commentReplyContainer__comment__modify = document.createElement("div");
  commentReplyContainer__comment__modify.setAttribute(
    "class",
    "commentReplyContainer__comment__modify"
  );
  const commentReplyContainer__comment__modify__votes =
    document.createElement("div");
  commentReplyContainer__comment__modify__votes.setAttribute(
    "class",
    "commentReplyContainer__comment__modify__votes"
  );

  const imgIcon1 = document.createElement("img");
  imgIcon1.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521532/interactive-comments-section-main/images/icon-plus_hgbuxm.svg"
  );
  imgIcon1.setAttribute("alt", "plus icon");

  const h1 = document.createElement("h1");
  h1.innerText = votes;

  const imgIcon2 = document.createElement("img");
  imgIcon2.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521530/interactive-comments-section-main/images/icon-minus_lkzi7d.svg"
  );
  imgIcon2.setAttribute("alt", "minus icon");

  commentReplyContainer__comment__modify__votes.appendChild(imgIcon1);
  commentReplyContainer__comment__modify__votes.appendChild(h1);
  commentReplyContainer__comment__modify__votes.appendChild(imgIcon2);

  commentReplyContainer__comment__modify.appendChild(
    commentReplyContainer__comment__modify__votes
  );

  const commentReplyContainer__comment__modify__reply =
    document.createElement("div");
  commentReplyContainer__comment__modify__reply.setAttribute(
    "class",
    "commentReplyContainer__comment__modify__reply"
  );

  const imgReply = document.createElement("img");
  imgReply.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521529/interactive-comments-section-main/images/icon-reply_xmi2ag.svg"
  );
  imgReply.setAttribute("alt", "edit icon");

  const h2Reply = document.createElement("h2");
  h2Reply.innerText = "Reply";
  commentReplyContainer__comment__modify__reply.appendChild(imgReply);
  commentReplyContainer__comment__modify__reply.appendChild(h2Reply);

  commentReplyContainer__comment__modify.appendChild(
    commentReplyContainer__comment__modify__reply
  );
  commentReplyContainer__comment.appendChild(
    commentReplyContainer__comment__modify
  );

  commentReplyContainer.appendChild(commentReplyContainer__comment);
  allCommentsContainer.appendChild(commentReplyContainer);
  body.appendChild(allCommentsContainer);
}

function yourComment(id, content, createdAt, score, user) {
  const yourCommentContainer = document.createElement("div");
  yourCommentContainer.setAttribute("class", "yourCommentContainer");
  yourCommentContainer.setAttribute("id", id);

  const yourCommentContainer__info = document.createElement("div");
  yourCommentContainer__info.setAttribute(
    "class",
    "yourCommentContainer__info"
  );
  const yourCommentContainer__info__name = document.createElement("div");
  yourCommentContainer__info__name.setAttribute(
    "class",
    "yourCommentContainer__info__name"
  );
  const figure = document.createElement("figure");
  const h2 = document.createElement("h2");
  h2.innerText = user;
  const span = document.createElement("span");
  span.innerText = "you";
  const p = document.createElement("p");
  p.innerText = createdAt;

  yourCommentContainer__info__name.appendChild(figure);
  yourCommentContainer__info__name.appendChild(h2);
  yourCommentContainer__info__name.appendChild(span);
  yourCommentContainer__info__name.appendChild(p);

  yourCommentContainer__info.appendChild(yourCommentContainer__info__name);
  yourCommentContainer.appendChild(yourCommentContainer__info);

  const commentContainer__comment = document.createElement("div");
  commentContainer__comment.setAttribute("class", "commentContainer__comment");
  const pComment = document.createElement("p");
  commentContainer__comment.appendChild(pComment);
  pComment.innerText = content;

  const commentContainer__comment__modify = document.createElement("div");
  commentContainer__comment__modify.setAttribute(
    "class",
    "commentContainer__comment__modify"
  );
  const commentContainer__comment__modify__votes =
    document.createElement("div");
  commentContainer__comment__modify__votes.setAttribute(
    "class",
    "commentContainer__comment__modify__votes"
  );
  const imgPlus = document.createElement("img");
  imgPlus.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521532/interactive-comments-section-main/images/icon-plus_hgbuxm.svg"
  );
  imgPlus.setAttribute("alt", "plus icon");
  const h1 = document.createElement("h1");
  h1.innerText = score;
  const imgMinus = document.createElement("img");
  imgMinus.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521530/interactive-comments-section-main/images/icon-minus_lkzi7d.svg"
  );

  commentContainer__comment__modify__votes.appendChild(imgPlus);
  commentContainer__comment__modify__votes.appendChild(h1);
  commentContainer__comment__modify__votes.appendChild(imgMinus);

  commentContainer__comment__modify.appendChild(
    commentContainer__comment__modify__votes
  );

  const commentContainer__comment__modify__container =
    document.createElement("div");
  commentContainer__comment__modify__container.setAttribute(
    "class",
    "commentContainer__comment__modify__container"
  );

  const modifier_container = document.createElement("div");
  modifier_container.setAttribute("class", "modifier_container");

  const figureIcon = document.createElement("figure");
  const imgDel = document.createElement("img");
  imgDel.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521530/interactive-comments-section-main/images/icon-delete_opxwow.svg"
  );
  imgDel.setAttribute("alt", "delete icon");
  figureIcon.appendChild(imgDel);

  const pText = document.createElement("p");
  pText.setAttribute("class", "delete");
  pText.innerText = "Delete";

  modifier_container.appendChild(figureIcon);
  modifier_container.appendChild(pText);

  commentContainer__comment__modify__container.appendChild(modifier_container);

  const modifier_containerV2 = document.createElement("div");
  modifier_containerV2.setAttribute("class", "modifier_container");

  const figureV2 = document.createElement("figure");
  const imgIcon3 = document.createElement("img");
  imgIcon3.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521530/interactive-comments-section-main/images/icon-edit_ofjwji.svg"
  );
  imgIcon3.setAttribute("alt", "edit icon");
  figureV2.appendChild(imgIcon3);

  const pTextV2 = document.createElement("p");
  pTextV2.setAttribute("class", "edit");
  pTextV2.innerText = "Edit";

  modifier_containerV2.appendChild(figureV2);
  modifier_containerV2.appendChild(pTextV2);

  commentContainer__comment__modify__container.appendChild(
    modifier_containerV2
  );
  commentContainer__comment__modify.appendChild(
    commentContainer__comment__modify__container
  );
  commentContainer__comment.appendChild(commentContainer__comment__modify);
  yourCommentContainer.appendChild(commentContainer__comment);
  allCommentsContainer.appendChild(yourCommentContainer);
  body.appendChild(allCommentsContainer);
}

//Creating the new object inside de data

function creatingData(comment) {
  const newData = {
    id: Math.floor(Math.random() * 100),
    content: comment,
    createdAt: "2 days ago",
    score: 0,
    user: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    replies: [],
  };
  data.comments.push(newData);
}

/// Deploy the replies and comments
function deployAllComments() {
  allCommentsContainer.innerHTML = "";
  data.comments.forEach((n) => {
    if (n.replies.length > 0) {
      createComment(n.user.username, n.createdAt, n.content, n.score);
      n.replies.forEach((r) => {
        createReply(r.content, r.user.username, r.createdAt, r.score);
      });
    } else if (n.replies.length === 0) {
      createComment(n.user.username, n.createdAt, n.content, n.score);
    }
  });
}
deployAllComments();

const sendButton = document.querySelector(".interactionButton");
const textArea = document.querySelector(".create-comment__textArea");

sendButton.addEventListener("click", () => {
  let comment;
  if (textArea.value !== "") {
    comment = textArea.value;
  }
  creatingData(comment);
  deployAllComments();
  textArea.value = "";
});
