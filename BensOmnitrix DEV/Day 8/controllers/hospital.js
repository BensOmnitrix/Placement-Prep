const express = require("express")
const app = express();

let data = [
  {
    kidney_pos: "left",
    health: "50",
  },
];

const kidneyInfo = (req, res) => {
  //User can check how many kidneys they have and their health
  const health = data.map(({ kidney_pos, health }) => ({ kidney_pos, health }));
  res
    .status(200)
    .json({ success: true, data: { count: health.length, data: health } });
}

const addKidney = (req, res) => {
  //User can add a new kidney
  const { kidney_pos, health } = req.body;
  if (!kidney_pos || !health) {
    return res.status(500).json({
      success: false,
      msg: "The object has empty values for a specific set of keys.",
    });
  }
  const ans = (kidney_pos) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i]["kidney_pos"] == kidney_pos) {
        return false;
      }
    }
    return true;
  };
  if (!ans(kidney_pos)) {
    return res.status(200).json({
      success: true,
      msg: `The ${kidney_pos} kidney is already present. If want to add a new one first remove the ${kidney_pos} kidney`,
    });
  }
  if (data.length < 2) {
    data.push({ kidney_pos: kidney_pos, health: health });
    console.log(data);
    return res.status(200).json({ success: true, data: data });
  }
}

const replaceKidney = (req, res) => {
  //User can replace a kidney, make it healthy
  const { replacePos } = req.params;
  const { kidney_pos, health } = req.body;
  if (kidney_pos === "" || health === "") {
    return res.status(500).json({
      success: false,
      msg: "The object has empty values for a specific set of keys.",
    });
  }
  const ans = (pos) => {
    return data.some((k) => k.kidney_pos === pos);
  };
  if (!ans(replacePos)) {
    return res.status(404).json({
      success: false,
      msg: `The person does not have a ${replacePos} kidney.`,
    });
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i]["kidney_pos"] == replacePos) {
      data[i]["health"] = health;
    }
  }
  res.status(200).json({ success: true, data: data });
}

const deleteKidney = (req, res) => {
  //User can remove a kidney
  const { pos } = req.query;
  const index = data.findIndex((k) => k.kidney_pos === pos);
  if (index === -1) {
    return res.status(404).json({
      success: false,
      msg: `The person already does not have ${pos} kidney`,
    });
  }
  data.splice(index, 1);
  if (data.length === 0) {
    return res.status(200).json({
      success: true,
      data,
      msg: "Both kidneys removed. The person is dead.",
    });
  }
  return res.status(200).json({
    success: true,
    data,
    msg: `The ${pos} kidney has been removed`,
  });
}


module.exports = {
    kidneyInfo,
    addKidney,replaceKidney,deleteKidney
}