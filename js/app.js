let xp = Storage.get("xp", 0);
let streak = Storage.get("streak", 0);
const today = new Date().toDateString();

/* DAILY CHALLENGE */
const challenges = [
  "Pray all 5 prayers",
  "Read Qur'an for 5 minutes",
  "Make dhikr for 10 minutes"
];

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/* LOAD QURAN + HADITH */
async function loadData() {

  const q = await fetch("data/quran.json").then(r => r.json());
  const h = await fetch("data/hadith.json").then(r => r.json());

  document.getElementById("quran").innerHTML =
    q[Math.floor(Math.random() * q.length)].text;

  document.getElementById("hadith").innerHTML =
    h[Math.floor(Math.random() * h.length)].text;
}

/* UI */
function updateUI() {
  document.getElementById("xp").innerText = xp;
  document.getElementById("streak").innerText = streak;

  let percent = xp % 100;
  document.getElementById("xpBar").style.width = percent + "%";
  document.getElementById("xpText").innerText = percent + " / 100 XP";
}

updateUI();
loadData();

/* CHALLENGE TEXT */
document.getElementById("challenge").innerText =
  pick(challenges);

/* BUTTON */
const btn = document.getElementById("completeBtn");

if (btn) {
  btn.onclick = function () {

    if (Storage.get("doneToday") === today) {
      alert("Already done!");
      return;
    }

    Storage.set("doneToday", today);

    xp += 10;
    streak += 1;

    Storage.set("xp", xp);
    Storage.set("streak", streak);

    updateUI();

    alert("+10 XP earned!");
  };
}