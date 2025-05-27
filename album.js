new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,

      items: [
        {
          img1: "images/Birthday-girl.jpeg",
          img2: "images/Birthday-girl2.jpeg",
          img3: "images/Birthday-girl1.jpeg",

          title: "Birthday Girl",
          isOpen: false,
        },
        {
          img1: "images/Dii.jpeg",
          img4: "images/dii2.jpeg",
          img2: "images/dii1.jpeg",
          img3: "images/dii2.jpeg",
          title: "cutie",
          isOpen: false,
        },
        // {
        //   img1: "images/Gorgeous (1).jpg",
        //   img2: "images/Gorgeous (2).jpg",
        //   img3: "images/Gorgeous (3).jpg",
        //   title: "Gorgeous",
        //   isOpen: false,
        // },
        {
          img1: "images/Di-jiju.jpeg",
          img2: "images/Di-jiju5.jpeg",
          img3: "images/Di-jiju1.jpeg",
          title: "Dii-Jiju",
          isOpen: false,
        },
        {
          img1: "images/we2.jpeg",
          img2: "images/we-jiju.jpeg",
          img3: "images/we.jpeg",
          title: "WE💟 ",
          isOpen: false,
        },
        {
          img1: "images/Di-jiju4.jpeg",
          img2: "images/Di-jiju3.jpeg",
          img3: "images/Di-jiju2.jpeg",
          title: "Wedding",
          isOpen: false,
        },

        {
          img1: "images/Papa.JPG",
          img2: "images/Papa1.JPG",
          img3: "images/papa-juhi-me.jpeg",
          title: "PAPA",
          isOpen: false,
        },

        {
          img1: "images/funny1.jpg",
          img2: "images/funny2.jpg",
          title: "WOW",
          isOpen: false,
        },

        // {
        //   img1: "images/all.jpeg",
        //   img2: "images/All1.JPG",
        //   img3: "images/all2.JPG",
        //   title: "Family",
        //   isOpen: false,
        // },

        {
          img1: "images/we5.jpg",
          img2: "images/we3.jpg",
          img3: "images/all3.jpg",
          title: "Family",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
