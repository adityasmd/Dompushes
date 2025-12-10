const reels = [
  {
    username: "alex_travels",
    likeCount: 1240,
    isLiked: false,
    isMuted: true,
    commentCount: 87,
    caption: "Sunsets hit different 🌅",
    video: "./videos/5585998-hd_1080_1920_30fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 45,
    isFollowed: true
  },
  {
    username: "foodie_ella",
    likeCount: 980,
    isLiked: true,
     isMuted: true,
    commentCount: 34,
    caption: "Best pasta ever!! 🍝",
    video: "./videos/5896379-uhd_2160_3840_24fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 22,
    isFollowed: false
  },
  {
    username: "gym_mike",
    likeCount: 5620,
    isLiked: false,
     isMuted: true,
    commentCount: 310,
    caption: "Push harder than yesterday 💪",
    video: "./videos/6627025-uhd_2160_4096_25fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    shareCount: 120,
    isFollowed: true
  },
  {
    username: "tech_neo",
    likeCount: 2130,
    isLiked: true,
     isMuted: true,
    commentCount: 140,
    caption: "New gadget review drops tomorrow!",
    video: "./videos/7205847-uhd_2160_3840_25fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 64,
    isFollowed: false
  },
  {
    username: "lily_art",
    likeCount: 760,
    isLiked: false,
     isMuted: true,
    commentCount: 29,
    caption: "Trying watercolor today 🎨",
    video: "./videos/5896379-uhd_2160_3840_24fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 18,
    isFollowed: true
  },
  {
    username: "johnny_moves",
    likeCount: 4900,
    isLiked: true,
     isMuted: true,
    commentCount: 250,
    caption: "Dance is life 💃🕺",
    video: "./videos/7205847-uhd_2160_3840_25fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 140,
    isFollowed: false
  },
  {
    username: "carlover_77",
    likeCount: 3320,
    isLiked: false,
     isMuted: true,
    commentCount: 98,
    caption: "Cold start mornings 🔥",
    video: "./videos/5585998-hd_1080_1920_30fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 72,
    isFollowed: true
  },
  {
    username: "nature_mara",
    likeCount: 1540,
    isLiked: true,
     isMuted: true,
    commentCount: 65,
    caption: "Forest walk therapy 🍃",
    video: "./videos/5896379-uhd_2160_3840_24fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    shareCount: 30,
    isFollowed: true
  },
  {
    username: "coder_ray",
    likeCount: 210,
    isLiked: false,
     isMuted: true,
    commentCount: 12,
    caption: "Debugging all night 😩",
    video: "./videos/6627025-uhd_2160_4096_25fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 4,
    isFollowed: false
  },
  {
    username: "style_by_kim",
    likeCount: 4210,
    isLiked: true,
     isMuted: true,
    commentCount: 190,
    caption: "Outfit of the day ✨",
    video: "./videos/5585998-hd_1080_1920_30fps.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 88,
    isFollowed: true
  }
];


let allreels= document.querySelector(".all-reels");

function reelsection(){
  let data=''
reels.forEach(function(elem, idx){
   data = data + `<div class="reels">
      <video ${elem.isMuted? 'muted':''} src="${elem.video}" ></video>
       <div class="mute" id=${idx}>
        <i class="ri-volume-mute-line"></i>
    </div>
    <div class="bottom">
        <div class="user">
            <img src="${elem.userprofile}">
           <h1>${elem.username}</h1>
           <button  id=${idx} class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
        </div>
        <h2>${elem.caption}</h2>
    </div>
    <div class="right">
        <div class="like" id=${idx}>
            <h1 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h1>
            <h3>${elem.likeCount}</h3>
        </div>
        <div class="comment">
            <h1 class="comment-icon"><i class="ri-message-2-line"></i></h1>
            <h3>${elem.commentCount}</h3>
        </div>
        <div class="share">
            <h1 class="share-icon"><i class="ri-share-forward-line"></i></h1>
            <h3>${elem.shareCount}</h3>
        </div>
        <div class="menu">
            <h1 class="menu-icon"><i class="ri-more-2-fill"></i></h1>
        </div>
    </div>
    </div>`

    allreels.innerHTML= data;
})
}

reelsection();



allreels.addEventListener('click', function(dets){
  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    }else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }
  }
    reelsection();
     if(dets.target.className == 'follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }else {
      reels[dets.target.id].isFollowed = false
    }
  }
  reelsection();

  if(dets.target.className == 'mute'){
    if(!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted = true
    }else {
      reels[dets.target.id].isMuted = false
    }
  }
  reelsection();
})
