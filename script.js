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
            username: "hendersor",
          },
        },
      ],
    },
  ],
};
const mainContainer = document.querySelector(".mainContainer");
const allCommentsContainer = document.querySelector(".allCommentsContainer");
// DOM manipulation to creating the comment container
function createComment(id, userName, time, comment, votes) {
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
    document.createElement("button");
  commentContainer__comment__modify__reply.setAttribute(
    "class",
    "commentContainer__comment__modify__reply"
  );
  commentContainer__comment__modify__reply.classList.add(id);

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
  mainContainer.appendChild(allCommentsContainer);

  body.appendChild(mainContainer);
}

function createReply(id, content, username, time, votes) {
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
    document.createElement("button");
  commentReplyContainer__comment__modify__reply.setAttribute(
    "class",
    "commentReplyContainer__comment__modify__reply"
  );
  commentReplyContainer__comment__modify__reply.classList.add(id);

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
  mainContainer.appendChild(allCommentsContainer);
  body.appendChild(mainContainer);
}

function yourComment(id, content, createdAt, score, user) {
  console.log(id);
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

  const modifier_container = document.createElement("button");
  modifier_container.setAttribute("class", "modifier_container");
  modifier_container.classList.add(id);

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

  const modifier_containerV2 = document.createElement("button");
  modifier_containerV2.setAttribute("class", "modifier_container");
  modifier_containerV2.classList.add(id);

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
  mainContainer.appendChild(allCommentsContainer);
  body.appendChild(mainContainer);

  deleteComment(modifier_container, id);
  editComment(
    modifier_containerV2,
    pComment,
    commentContainer__comment,
    commentContainer__comment__modify
  );
}

function yourCommentReply(id, content, createdAt, score, user) {
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

  const modifier_container = document.createElement("button");
  modifier_container.setAttribute("class", "modifier_container");
  modifier_container.classList.add(id);

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

  const modifier_containerV2 = document.createElement("button");
  modifier_containerV2.setAttribute("class", "modifier_container");
  modifier_containerV2.classList.add(id);

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
  mainContainer.appendChild(allCommentsContainer);
  body.appendChild(mainContainer);

  deleteComment(modifier_container, id);
  editComment(
    modifier_containerV2,
    pComment,
    commentContainer__comment,
    commentContainer__comment__modify
  );
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

const sendButton = document.querySelector(".interactionButton");

sendButton.addEventListener("click", () => {
  const textArea = document.querySelector(".create-comment__textArea");

  let comment;
  if (textArea.value !== "") {
    comment = textArea.value;
    creatingData(comment);
    deployAllComments();
  }

  textArea.value = "";
});

//Function to delete your comment
function deleteComment(button, id) {
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".btnContainer .no");
  const deleteTheComment = document.querySelector(".btnContainer .yes");

  button.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    modal.showModal();
    console.log(data);
  });

  closeModal.addEventListener("click", () => {
    body.style.overflow = "auto";
    modal.close();
  });

  deleteTheComment.addEventListener("click", () => {
    // const id = parseInt(button.classList.value.split(" ")[1]);
    console.log(id);
    let index = data.comments.findIndex((obj) => {
      return obj.id === id;
    });

    console.log(index);

    data.comments.splice(index, 1);
    deployAllComments();
    modal.close();

    console.log(data);
    body.style.overflow = "auto";
  });
}

//Function to edit your comment
function editComment(button, text, parent, parentContainer) {
  button.addEventListener("click", () => {
    const id = parseInt(button.classList.value.split(" ")[1]);
    const comment = data.comments.filter((c) => c.id === id);
    const commentFilter = comment[0].content;

    const textArea = document.createElement("textarea");
    textArea.setAttribute("class", "create-comment__textArea");
    textArea.innerText = commentFilter;
    parent.replaceChild(textArea, text);

    const btns = parent.querySelector(
      ".commentContainer__comment__modify__container"
    );
    btns.classList.toggle("notVisible");
    const btn = document.createElement("button");
    btn.innerText = "UPDATE";
    btn.setAttribute("class", "interactionButton");
    parentContainer.appendChild(btn);

    btn.addEventListener("click", () => {
      const newComment = textArea.value;
      comment[0].content = newComment;
      parent.innerHTML = "";
      deployAllComments();
    });
  });
}

/// Deploy the replies and comments
function deployAllComments() {
  allCommentsContainer.innerHTML = "";
  const yourComments = [];

  data.comments.forEach((n) => {
    if (n.replies.length > 0) {
      createComment(n.id, n.user.username, n.createdAt, n.content, n.score);

      n.replies.forEach((r) => {
        if (r.user.username === "juliusomo") {
          console.log("julisomo");
          yourCommentReply(
            r.id,
            r.content,
            r.createdAt,
            r.score,
            r.user.username
          );
        } else if (r.user.username !== "juliusomo") {
          createReply(r.id, r.content, r.user.username, r.createdAt, r.score);
        }
      });

      // Por cualquier bug, solo borra la condicional y quedate con el bucle .forEach
    } else if (n.replies.length === 0) {
      if (n.replies.length === 0 && n.user.username === "juliusomo") {
        yourComments.push(n);
        const lastItem = yourComments[yourComments.length - 1];
        yourComment(
          lastItem.id,
          lastItem.content,
          lastItem.createdAt,
          lastItem.score,
          lastItem.user.username
        );
      } else if (n.replies.length === 0 && n.user.username !== "juliusomo")
        createComment(n.id, n.user.username, n.createdAt, n.content, n.score);
    }
  });
}
deployAllComments();

// Over here

//Function to reply a comment
const otherButtons = document.querySelectorAll(".commentReplyContainer button");
const rpyButtons = document.querySelectorAll(".commentContainer button");
const allButtons = [...rpyButtons, ...otherButtons];

let finalComment;
let commentContainer;
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = parseInt(btn.classList.value.split(" ")[1]);
    const comment = data.comments.filter((n) => n.id === id)[0];
    let commentContainer = btn.parentElement.parentElement.parentElement;
    // ///////////////////////////////////

    let replyingTo;
    let theMainComment;
    theMainComment = data.comments.filter((c) => c.id === id);
    if (theMainComment.length !== 0) {
      replyingTo = comment.user.username;
    } else {
      data.comments.forEach((c) => {
        const replyComment = c.replies.filter((c) => c.id === id);
        if (replyComment.length !== 0) {
          theMainComment = [c];
          replyingTo = replyComment[0].user.username;
        }
      });
    }
    createReplyContainer(commentContainer, replyingTo, theMainComment);
  });
});

function createReplyContainer(commentContainer, replyingTo, theMainComment) {
  const container = document.createElement("div");
  container.setAttribute("class", "commentReplyContainer2");
  const img = document.createElement("img");
  img.setAttribute("class", "image");
  img.setAttribute(
    "src",
    "https://res.cloudinary.com/dwdz4mn27/image/upload/v1677521531/interactive-comments-section-main/images/avatars/image-juliusomo_zyjpmi.png"
  );
  const textArea = document.createElement("textarea");
  textArea.setAttribute("class", "textArea");
  let user = `@${replyingTo}`;
  textArea.innerText = user;

  const replyBtn = document.createElement("button");
  replyBtn.setAttribute("class", "replyButton");
  replyBtn.innerText = "REPLY";

  container.appendChild(img);
  container.appendChild(textArea);
  container.appendChild(replyBtn);
  commentContainer.parentNode.insertBefore(
    container,
    commentContainer.nextSibling
  );

  replyBtn.addEventListener("click", () => {
    let finalReply = textArea.value;
    deployReply(replyingTo, finalReply, theMainComment);
  });
}

function deployReply(replyingTo, reply, theMainComment) {
  const replyData = {
    id: Math.floor(Math.random() * 100),
    createdAt: "Just now",
    content: reply,
    replyingTo: replyingTo,
    user: { username: "juliusomo" },
    score: 5,
  };
  theMainComment[0].replies.push(replyData);
  deployAllComments();
}
