const data = [
    {
      subject: "50% off",
      type: [0],
    },
    {
      subject: "Save up to 50% off",
      type: [0],
    },
    {
      subject: "Limited time offer",
      type: [0],
    },
    {
      subject: "Save money",
      type: [0],
    },
    {
      subject: "Find a deal",
      type: [0],
    },
    {
      subject: "Apple now",
      type: [0],
    },
    {
      subject: "Act now",
      type: [0],
    },
    {
      subject: "Save up to",
      type: [0],
    },
    {
      subject: "Find out if you qualify",
      type: [0],
    },
    {
      subject: "you are eligible",
      type: [0],
    },
    {
      subject: "eligible to be activate",
      type: [0],
    },
    {
      subject: "affordable plan",
      type: [0],
    },
    {
      subject: "Jim has replied your post",
      type: [1],
    },
    {
      subject: "John has liked your post",
      type: [1],
    },
    {
      subject: "replied you",
      type: [1],
    },
    {
      subject: "like your post",
      type: [1],
    },
    {
      subject: "Account statement",
      type: [1],
    },
    {
      subject: "Your order",
      type: [1],
    },
    {
      subject: "commented on",
      type: [1],
    },
    {
      subject: "Saqib has commented on your post",
      type: [1],
    },
    {
      subject: "81 has commented and liked your post",
      type: [1],
    },
    {
      subject: "package delivered",
      type: [1],
    },
    {
      subject: "resume",
      type: [1],
    },
    {
      subject: "coding exercises",
      type: [1],
    },
    {
      subject: "sign in",
      type: [1],
    },
    {
      subject: "password changed",
      type: [1],
    },
  ];
  const network = new brain.recurrent.LSTM();
  const trainData = data.map((email) => ({
    input: email.subject,
    output: email.type,
  }));

  network.train(trainData, {
    iterations: 2000
  });

  const output = document.querySelector(".output");
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {

    const input = document.querySelector("input").value;
    const result = network.run(input);

    if (result !== 0) {
      output.innerHTML = "Not a Spam email";
    } else {
      output.innerHTML = "Spam email";
    }

  });