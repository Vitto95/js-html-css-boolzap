const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
    imagePath: "assets/img/", //percorso per accedere alle immagini
    activeContact: 0, //indice per il contatto cliccato
    inputMsg: "", //input di scrittura messaggio
    searchContactName: "",
  },
  methods: {
    imageLink(imgName, ...args) {
      let link = this.imagePath;
      link += imgName;
      if (args.length > 0) {
        for (arg of args) {
          link += arg;
        }
      }
      return link;
    },
    showMessages(index) {
      this.activeContact = index;
    },
    sendMsg() {
      let newMsg = {
        date: "10/01/2020 15:30:55",
        text: this.inputMsg,
        status: "sent",
      };
      let newAnswer = {
        date: "10/01/2020 15:30:55",
        text: "ok",
        status: "received",
      };
      this.contacts[this.activeContact].messages.push(newMsg);
      this.contacts[this.activeContact].messages.push(newAnswer);
      this.inputMsg = "";
    },
    searchContact() {
      /*      if (this.searchContactName.length === 0) {
          contact.visible = true;
        } else {
          for (index in this.searchContactName) {
            if (
              !contact.name
                .toLowerCase()
                .includes(this.searchContactName.toLowerCase().charAt(index))
            ) {
              contact.visible = false;
            }
          }
        } */
      /*  SOLUZIONE OBSOLETA if (
          !contact.name
            .toLowerCase()
            .includes(
              this.searchContactName
                .toLowerCase()
                .charAt(this.searchContactName.length - 1)
            )
        ) {
          contact.visible = false;
        } SOLUZIONE OBSOLETA */

      const filteredList = this.contacts.filter((contact) => {
        contact.visible = true; //per il delete!!!!
        if (this.searchContactName.length === 0) {
          contact.visible = true;
        } else {
          for (index in this.searchContactName) {
            if (
              !contact.name
                .toLowerCase()
                .includes(this.searchContactName.toLowerCase().charAt(index))
            ) {
              contact.visible = false;
            }
          }
        }

        return contact.visible === true;
      });

      return filteredList;
    },
  },
});
