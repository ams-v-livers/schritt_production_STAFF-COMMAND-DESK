const categories = [
  { id: "survival", label: "生存・安全" },
  { id: "gamemode", label: "ゲームモード" },
  { id: "teleport", label: "テレポート" },
  { id: "world", label: "ワールド管理" },
  { id: "player", label: "プレイヤー管理" },
  { id: "commandblock", label: "コマンドブロック" },
  { id: "entity", label: "MOB・エンティティ" },
  { id: "utility", label: "運営・便利" }
];


const commandBlockDefaults = {

  single: {
    type: "衝撃",
    condition: "無条件",
    power: "動力が必要"
  },

  repeat: {
    type: "リピート",
    condition: "無条件",
    power: "常時実行"
  },

  chain: {
    type: "チェーン",
    condition: "無条件",
    power: "常時実行"
  }

};


const commands = [

  /* =========================
     生存・安全
  ========================= */

  {
    category: "survival",
    title: "通常ダメージでほぼ死亡しない",
    description: "サバイバルのまま高レベルの耐性を付与し、通常の戦闘・爆発などによるダメージをほぼ無効化します。",
    commands: [
      "/effect give {target} minecraft:resistance infinite 255 true"
    ],
    settings: commandBlockDefaults.repeat,
    commandBlockAvailable: true,
    tone: "caution",
    note: "/kill や奈落など、一部の特殊な死亡要因まで完全に防げるわけではありません。"
  },

  {
    category: "survival",
    title: "体力を常時高速回復",
    description: "ダメージを受けても体力を高速で自動回復します。",
    commands: [
      "/effect give {target} minecraft:regeneration infinite 255 true"
    ],
    settings: commandBlockDefaults.repeat,
    commandBlockAvailable: true
  },

  {
    category: "survival",
    title: "空腹ゲージを常に満タン",
    description: "サバイバルモードのまま空腹ゲージを継続的に回復します。",
    commands: [
      "/effect give {target} minecraft:saturation 1 255 true"
    ],
    settings: commandBlockDefaults.repeat,
    commandBlockAvailable: true
  },

  {
    category: "survival",
    title: "エフェクトをすべて解除",
    description: "選択した対象に付与されているエフェクトをすべて解除します。",
    commands: [
      "/effect clear {target}"
    ],
    commandBlockAvailable: false
  },

  {
    category: "survival",
    title: "死亡してもアイテムを落とさない",
    description: "死亡してもインベントリと経験値を保持します。死亡そのものを防ぐ設定ではありません。",
    commands: [
      "/gamerule keepInventory true",
      "/gamerule keepInventory false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "survival",
    title: "落下ダメージを無効化",
    description: "高所から落下しても落下ダメージを受けなくなります。",
    commands: [
      "/gamerule fallDamage false",
      "/gamerule fallDamage true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "survival",
    title: "炎ダメージを無効化",
    description: "炎や溶岩などによる火炎ダメージを無効化します。",
    commands: [
      "/gamerule fireDamage false",
      "/gamerule fireDamage true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "survival",
    title: "溺水ダメージを無効化",
    description: "水中で酸素がなくなった場合でも溺水ダメージを受けなくなります。",
    commands: [
      "/gamerule drowningDamage false",
      "/gamerule drowningDamage true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "survival",
    title: "凍結ダメージを無効化",
    description: "粉雪などによる凍結ダメージを無効化します。",
    commands: [
      "/gamerule freezeDamage false",
      "/gamerule freezeDamage true"
    ],
    commandBlockAvailable: false
  },


  /* =========================
     ゲームモード
  ========================= */

  {
    category: "gamemode",
    title: "サバイバルに変更",
    description: "選択した対象をサバイバルモードへ変更します。",
    commands: [
      "/gamemode survival {target}"
    ],
    commandBlockAvailable: false
  },

  {
    category: "gamemode",
    title: "クリエイティブに変更",
    description: "選択した対象をクリエイティブモードへ変更します。",
    commands: [
      "/gamemode creative {target}"
    ],
    commandBlockAvailable: false
  },

  {
    category: "gamemode",
    title: "スペクテイターに変更",
    description: "選択した対象をスペクテイターモードへ変更します。",
    commands: [
      "/gamemode spectator {target}"
    ],
    commandBlockAvailable: false
  },

  {
    category: "gamemode",
    title: "アドベンチャーに変更",
    description: "選択した対象をアドベンチャーモードへ変更します。",
    commands: [
      "/gamemode adventure {target}"
    ],
    commandBlockAvailable: false
  },


  /* =========================
     テレポート
  ========================= */

  {
    category: "teleport",
    title: "指定座標へTP",
    description: "選択した対象を指定座標へテレポートします。X・Y・Zを目的地の座標へ変更してください。",
    commands: [
      "/tp {target} X Y Z"
    ],
    commandBlockAvailable: false,
    note: "例：/tp @s 100 80 -250"
  },

  {
    category: "teleport",
    title: "指定プレイヤーの場所へTP",
    description: "選択した対象を指定したプレイヤーの現在地へ移動します。",
    commands: [
      "/tp {target} プレイヤー名"
    ],
    commandBlockAvailable: false
  },

  {
    category: "teleport",
    title: "現在地から50ブロック上へTP",
    description: "選択した対象を現在位置から50ブロック上へ移動します。",
    commands: [
      "/tp {target} ~ ~50 ~"
    ],
    commandBlockAvailable: false
  },

  {
    category: "teleport",
    title: "現在地から10ブロック移動",
    description: "現在位置からXまたはZ方向へ10ブロック移動します。",
    commands: [
      "/tp {target} ~10 ~ ~",
      "/tp {target} ~-10 ~ ~",
      "/tp {target} ~ ~ ~10",
      "/tp {target} ~ ~ ~-10"
    ],
    commandBlockAvailable: false
  },

  {
    category: "teleport",
    title: "全員を指定座標へ集合",
    description: "オンライン中の全プレイヤーを指定座標へ移動します。",
    commands: [
      "/tp @a X Y Z"
    ],
    commandBlockAvailable: false,
    tone: "caution",
    note: "オンライン中の全プレイヤーが強制移動します。"
  },


  /* =========================
     ワールド管理
  ========================= */

  {
    category: "world",
    title: "昼にする",
    description: "ワールドの時間を昼へ変更します。",
    commands: [
      "/time set day"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "正午にする",
    description: "ワールドの時間を正午へ変更します。",
    commands: [
      "/time set noon"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "夜にする",
    description: "ワールドの時間を夜へ変更します。",
    commands: [
      "/time set night"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "深夜にする",
    description: "ワールドの時間を深夜へ変更します。",
    commands: [
      "/time set midnight"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "時間を固定",
    description: "昼夜サイクルを停止し、現在の時間帯を維持します。",
    commands: [
      "/gamerule doDaylightCycle false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "時間の流れを再開",
    description: "停止していた昼夜サイクルを再開します。",
    commands: [
      "/gamerule doDaylightCycle true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "晴れにする",
    description: "ワールドの天候を晴れへ変更します。",
    commands: [
      "/weather clear"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "雨にする",
    description: "ワールドの天候を雨へ変更します。",
    commands: [
      "/weather rain"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "雷雨にする",
    description: "ワールドの天候を雷雨へ変更します。",
    commands: [
      "/weather thunder"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "天候変化を停止",
    description: "現在の天候を維持し、自然な天候変化を停止します。",
    commands: [
      "/gamerule doWeatherCycle false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "天候変化を再開",
    description: "自然な天候変化を再開します。",
    commands: [
      "/gamerule doWeatherCycle true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "難易度をピースフル",
    description: "ワールドの難易度をピースフルへ変更します。",
    commands: [
      "/difficulty peaceful"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "難易度をイージー",
    description: "ワールドの難易度をイージーへ変更します。",
    commands: [
      "/difficulty easy"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "難易度をノーマル",
    description: "ワールドの難易度をノーマルへ変更します。",
    commands: [
      "/difficulty normal"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "難易度をハード",
    description: "ワールドの難易度をハードへ変更します。",
    commands: [
      "/difficulty hard"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "MOB自然スポーンを停止",
    description: "MOBの自然スポーンを停止します。すでに存在しているMOBは残ります。",
    commands: [
      "/gamerule doMobSpawning false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "MOB自然スポーンを再開",
    description: "MOBの自然スポーンを再開します。",
    commands: [
      "/gamerule doMobSpawning true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "MOBによる地形破壊を停止",
    description: "クリーパーやエンダーマンなどによるブロックへの干渉を抑えます。",
    commands: [
      "/gamerule mobGriefing false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "MOBによる地形破壊を再開",
    description: "MOBによる通常の地形への干渉を再開します。",
    commands: [
      "/gamerule mobGriefing true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "炎の延焼を停止",
    description: "炎によるブロックへの延焼を停止します。",
    commands: [
      "/gamerule doFireTick false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "炎の延焼を再開",
    description: "炎によるブロックへの延焼を再開します。",
    commands: [
      "/gamerule doFireTick true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "ワールドスポーンを現在地に設定",
    description: "ワールド全体の基本スポーン地点を現在位置へ設定します。",
    commands: [
      "/setworldspawn ~ ~ ~"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "ワールドスポーンを座標指定",
    description: "ワールド全体の基本スポーン地点を指定座標へ設定します。",
    commands: [
      "/setworldspawn X Y Z"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "死亡メッセージを非表示",
    description: "プレイヤー死亡時のメッセージをチャットへ表示しないようにします。",
    commands: [
      "/gamerule showDeathMessages false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "world",
    title: "死亡メッセージを表示",
    description: "プレイヤー死亡時のメッセージを通常通り表示します。",
    commands: [
      "/gamerule showDeathMessages true"
    ],
    commandBlockAvailable: false
  },


  /* =========================
     プレイヤー管理
  ========================= */

  {
    category: "player",
    title: "リスポーン地点を現在地に設定",
    description: "選択した対象の死亡後の復活地点を現在位置へ設定します。",
    commands: [
      "/spawnpoint {target} ~ ~ ~"
    ],
    commandBlockAvailable: false
  },

  {
    category: "player",
    title: "リスポーン地点を座標指定",
    description: "選択した対象の死亡後の復活地点を指定座標へ設定します。",
    commands: [
      "/spawnpoint {target} X Y Z"
    ],
    commandBlockAvailable: false
  },

  {
    category: "player",
    title: "インベントリを全削除",
    description: "選択した対象のインベントリ内アイテムをすべて削除します。",
    commands: [
      "/clear {target}"
    ],
    commandBlockAvailable: false,
    tone: "caution",
    note: "実行すると元に戻せないため、対象を必ず確認してください。"
  },

  {
    category: "player",
    title: "アイテムを付与",
    description: "選択した対象へアイテムを付与します。アイテムIDと個数を変更して使用してください。",
    commands: [
      "/give {target} minecraft:diamond 1"
    ],
    commandBlockAvailable: false
  },

  {
    category: "player",
    title: "経験値レベルを10追加",
    description: "選択した対象へ経験値レベルを10追加します。",
    commands: [
      "/experience add {target} 10 levels"
    ],
    commandBlockAvailable: false
  },

  {
    category: "player",
    title: "経験値レベルを30に設定",
    description: "選択した対象の経験値レベルを30へ設定します。",
    commands: [
      "/experience set {target} 30 levels"
    ],
    commandBlockAvailable: false
  },

  {
    category: "player",
    title: "対象を強制死亡",
    description: "スタック時などに選択した対象を強制的に死亡させます。",
    commands: [
      "/kill {target}"
    ],
    commandBlockAvailable: false,
    tone: "caution",
    note: "keepInventory がOFFの場合は所持アイテムを落とします。"
  },


  /* =========================
     コマンドブロック
  ========================= */

  {
    category: "commandblock",
    title: "通常コマンドブロックを入手",
    description: "通常のコマンドブロックを入手します。チャットから実行してください。",
    commands: [
      "/give @s minecraft:command_block 1"
    ],
    commandBlockAvailable: false
  },

  {
    category: "commandblock",
    title: "リピートコマンドブロックを入手",
    description: "リピートコマンドブロックを入手します。チャットから実行してください。",
    commands: [
      "/give @s minecraft:repeating_command_block 1"
    ],
    commandBlockAvailable: false
  },

  {
    category: "commandblock",
    title: "チェーンコマンドブロックを入手",
    description: "チェーンコマンドブロックを入手します。チャットから実行してください。",
    commands: [
      "/give @s minecraft:chain_command_block 1"
    ],
    commandBlockAvailable: false
  },

  {
    category: "commandblock",
    title: "1回だけ実行する設定",
    description: "ボタンやレバーなどの信号を受けた時に、1回だけコマンドを実行する基本設定です。",
    commands: [],
    informationOnly: true,
    settings: commandBlockDefaults.single
  },

  {
    category: "commandblock",
    title: "常時繰り返し実行する設定",
    description: "耐性・回復・満腹などを継続的に実行する場合の設定です。",
    commands: [],
    informationOnly: true,
    settings: commandBlockDefaults.repeat,
    note: "テレポートなどをリピート設定すると、対象が移動できなくなる場合があるため注意してください。"
  },

  {
    category: "commandblock",
    title: "チェーンで続けて実行する設定",
    description: "別のコマンドブロックに続けて処理を実行する場合の設定です。",
    commands: [],
    informationOnly: true,
    settings: commandBlockDefaults.chain
  },

  {
    category: "commandblock",
    title: "前の処理成功時だけ実行",
    description: "直前のコマンドブロックが正常に成功した場合だけ、次のコマンドを実行します。",
    commands: [],
    informationOnly: true,
    settings: {
      type: "チェーン",
      condition: "条件付き",
      power: "常時実行"
    }
  },

  {
    category: "commandblock",
    title: "コマンドブロック出力を非表示",
    description: "コマンドブロックの実行ログが大量に表示されるのを防ぎます。",
    commands: [
      "/gamerule commandBlockOutput false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "commandblock",
    title: "コマンドブロック出力を表示",
    description: "コマンドブロックの実行結果表示を元に戻します。",
    commands: [
      "/gamerule commandBlockOutput true"
    ],
    commandBlockAvailable: false
  },

  {
    category: "commandblock",
    title: "管理コマンドのフィードバックを非表示",
    description: "管理コマンド実行時のフィードバックメッセージを非表示にします。",
    commands: [
      "/gamerule sendCommandFeedback false"
    ],
    commandBlockAvailable: false
  },

  {
    category: "commandblock",
    title: "管理コマンドのフィードバックを表示",
    description: "管理コマンド実行時のフィードバック表示を通常状態へ戻します。",
    commands: [
      "/gamerule sendCommandFeedback true"
    ],
    commandBlockAvailable: false
  },


  /* =========================
     MOB・エンティティ
  ========================= */

  {
    category: "entity",
    title: "地面のアイテムを全削除",
    description: "地面にドロップしているアイテムエンティティをすべて削除します。",
    commands: [
      "/kill @e[type=minecraft:item]"
    ],
    commandBlockAvailable: false,
    tone: "caution",
    note: "必要なドロップアイテムもすべて消えるため注意してください。"
  },

  {
    category: "entity",
    title: "経験値オーブを全削除",
    description: "ワールド内に存在する経験値オーブをすべて削除します。",
    commands: [
      "/kill @e[type=minecraft:experience_orb]"
    ],
    commandBlockAvailable: false
  },

  {
    category: "entity",
    title: "ゾンビを全削除",
    description: "ワールド内に存在するゾンビをすべて削除します。",
    commands: [
      "/kill @e[type=minecraft:zombie]"
    ],
    commandBlockAvailable: false
  },

  {
    category: "entity",
    title: "半径30ブロック以内のゾンビを削除",
    description: "実行地点から30ブロック以内にいるゾンビだけを削除します。",
    commands: [
      "/kill @e[type=minecraft:zombie,distance=..30]"
    ],
    commandBlockAvailable: false
  },

  {
    category: "entity",
    title: "プレイヤー以外の全エンティティを削除",
    description: "プレイヤー以外のエンティティをすべて削除します。",
    commands: [
      "/kill @e[type=!minecraft:player]"
    ],
    commandBlockAvailable: false,
    tone: "caution",
    note: "MOBだけではなく、落下アイテム・防具立て・額縁なども削除されるため注意してください。"
  },


  /* =========================
     運営・便利
  ========================= */

  {
    category: "utility",
    title: "現在座標を確認",
    description: "選択した対象の現在座標データを確認します。",
    commands: [
      "/data get entity {target} Pos"
    ],
    commandBlockAvailable: false,
    note: "@a や @e など複数対象では使用できません。@s・@p・@rなど単一対象を使用してください。"
  },

  {
    category: "utility",
    title: "現在の時刻を確認",
    description: "ワールド内の現在時刻を数値で確認します。",
    commands: [
      "/time query daytime"
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "経過ゲーム時間を確認",
    description: "ワールド作成後のゲーム時間を確認します。",
    commands: [
      "/time query gametime"
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "全員へ運営メッセージ",
    description: "全プレイヤーのチャットへ運営からのお知らせを表示します。",
    commands: [
      '/tellraw @a {"text":"運営からのお知らせ","color":"gold"}'
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "画面中央へタイトル表示",
    description: "全プレイヤーの画面中央へイベント開始などのタイトルを表示します。",
    commands: [
      '/title @a title {"text":"EVENT START","color":"gold","bold":true}'
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "表示中のタイトルを消す",
    description: "全プレイヤーに表示されているタイトルを消します。",
    commands: [
      "/title @a clear"
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "keepInventory設定を確認",
    description: "死亡時のアイテム保持設定が現在ONかOFFか確認します。",
    commands: [
      "/gamerule keepInventory"
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "MOB自然スポーン設定を確認",
    description: "MOBの自然スポーン設定が現在ONかOFFか確認します。",
    commands: [
      "/gamerule doMobSpawning"
    ],
    commandBlockAvailable: false
  },

  {
    category: "utility",
    title: "mobGriefing設定を確認",
    description: "MOBによる地形への干渉設定が現在ONかOFFか確認します。",
    commands: [
      "/gamerule mobGriefing"
    ],
    commandBlockAvailable: false
  }

];


const targetChoices = [
  { value: "@s", label: "実行者" },
  { value: "@p", label: "最寄り" },
  { value: "@a", label: "全プレイヤー" },
  { value: "@r", label: "ランダム1人" },
  { value: "@e", label: "全エンティティ" }
];


const categorySelect =
  document.getElementById("categorySelect");

const commandSelect =
  document.getElementById("commandSelect");

const commandGrid =
  document.getElementById("commandGrid");

const resultMeta =
  document.getElementById("resultMeta");

const toast =
  document.getElementById("toast");

const officeLogo =
  document.getElementById("officeLogo");

const logoFallback =
  document.getElementById("logoFallback");


let activeCategory =
  "survival";

let activeCommandIndex =
  0;

let activeTarget =
  "@s";

let toastTimer;



function escapeHtml(value) {

  return String(value).replace(
    /[&<>'"]/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;"
    }[character])
  );

}



function categoryLabel(id) {

  return (
    categories.find(
      item =>
        item.id === id
    )?.label || id
  );

}



function commandsForCategory(categoryId) {

  return commands

    .map(
      (item, index) => ({
        item,
        index
      })
    )

    .filter(
      entry =>
        entry.item.category === categoryId
    );

}



function resolveCommandTarget(command) {

  return command.replaceAll(
    "{target}",
    activeTarget
  );

}



function commandUsesTarget(item) {

  return item.commands.some(
    command =>
      command.includes("{target}")
  );

}



function getCommandBlockGiveCommand(settings) {

  if (!settings) {
    return "";
  }


  if (settings.type === "リピート") {

    return "/give @s minecraft:repeating_command_block 1";

  }


  if (settings.type === "チェーン") {

    return "/give @s minecraft:chain_command_block 1";

  }


  return "/give @s minecraft:command_block 1";

}



/* =========================
   CATEGORY SELECT
========================= */

function renderCategorySelect() {

  categorySelect.innerHTML =
    categories

      .map(category => {

        const count =
          commands.filter(
            item =>
              item.category === category.id
          ).length;


        return `
          <option value="${escapeHtml(category.id)}">
            ${escapeHtml(category.label)}（${count}）
          </option>
        `;

      })

      .join("");


  categorySelect.value =
    activeCategory;

}



/* =========================
   COMMAND SELECT
========================= */

function renderCommandSelect() {

  const list =
    commandsForCategory(
      activeCategory
    );


  commandSelect.innerHTML =
    list

      .map(
        (
          { item, index },
          position
        ) => {

          return `
            <option value="${index}">
              ${String(position + 1).padStart(2, "0")}｜${escapeHtml(item.title)}
            </option>
          `;

        }
      )

      .join("");


  if (!list.length) {

    activeCommandIndex =
      -1;

    commandGrid.innerHTML =
      "";

    resultMeta.textContent =
      "NO COMMAND";

    return;

  }


  activeCommandIndex =
    list[0].index;


  commandSelect.value =
    String(activeCommandIndex);


  renderSelectedCommand();

}



/* =========================
   TARGET SELECTOR
========================= */

function renderTargetSelector(item) {

  if (!commandUsesTarget(item)) {
    return "";
  }


  const buttons =
    targetChoices

      .map(target => {

        const activeClass =
          target.value === activeTarget
            ? "active"
            : "";


        return `
          <button
            type="button"
            class="target-btn ${activeClass}"
            data-target="${escapeHtml(target.value)}"
          >

            <strong>
              ${escapeHtml(target.value)}
            </strong>

            <small>
              ${escapeHtml(target.label)}
            </small>

          </button>
        `;

      })

      .join("");


  return `
    <div class="inline-target-selector">

      <div class="inline-target-head">

        <span>
          実行対象を変更
        </span>

        <strong>
          現在：${escapeHtml(activeTarget)}
        </strong>

      </div>


      <div class="target-buttons">
        ${buttons}
      </div>

    </div>
  `;

}



/* =========================
   COMMAND
========================= */

function renderCommandLines(item) {

  if (
    item.informationOnly ||
    !item.commands.length
  ) {

    return "";

  }


  return `
    <div class="command-list">

      ${
        item.commands

          .map(command => {

            const resolvedCommand =
              resolveCommandTarget(command);


            return `
              <div class="command-line">

                <code>
                  ${escapeHtml(resolvedCommand)}
                </code>

                <button
                  type="button"
                  class="copy-btn"
                  data-copy="${escapeHtml(resolvedCommand)}"
                >
                  コピー
                </button>

              </div>
            `;

          })

          .join("")
      }

    </div>
  `;

}



/* =========================
   INFORMATION ONLY
========================= */

function renderInformationSettings(item) {

  if (
    !item.informationOnly ||
    !item.settings
  ) {

    return "";

  }


  return `
    <div class="info-setting-box">

      <span class="info-setting-title">
        コマンドブロックの設定内容
      </span>


      <div class="info-settings">

        <div class="info-setting">

          <span>
            ブロックの種類
          </span>

          <strong>
            ${escapeHtml(item.settings.type)}
          </strong>

        </div>


        <div class="info-setting">

          <span>
            条件
          </span>

          <strong>
            ${escapeHtml(item.settings.condition)}
          </strong>

        </div>


        <div class="info-setting">

          <span>
            実行設定
          </span>

          <strong>
            ${escapeHtml(item.settings.power)}
          </strong>

        </div>

      </div>

    </div>
  `;

}



/* =========================
   COMMAND BLOCK
========================= */

function renderCommandBlockSection(item) {

  if (
    item.commandBlockAvailable !== true ||
    !item.settings ||
    item.informationOnly === true
  ) {

    return "";

  }


  const giveCommand =
    getCommandBlockGiveCommand(
      item.settings
    );


  return `
    <div class="command-block-section">

      <div class="command-block-head">

        <h4>
          コマンドブロック設定
        </h4>

        <p>
          ※利用する場合のみ
        </p>

      </div>


      <div class="command-block-get">

        <span class="command-block-label">
          コマンドブロック入手コマンド
        </span>


        <div class="command-line">

          <code>
            ${escapeHtml(giveCommand)}
          </code>

          <button
            type="button"
            class="copy-btn"
            data-copy="${escapeHtml(giveCommand)}"
          >
            コピー
          </button>

        </div>

      </div>


      <div class="command-block-settings">

        <div class="command-block-setting">

          <span>
            ブロックの種類
          </span>

          <strong>
            ${escapeHtml(item.settings.type)}
          </strong>

        </div>


        <div class="command-block-setting">

          <span>
            条件
          </span>

          <strong>
            ${escapeHtml(item.settings.condition)}
          </strong>

        </div>


        <div class="command-block-setting">

          <span>
            実行設定
          </span>

          <strong>
            ${escapeHtml(item.settings.power)}
          </strong>

        </div>

      </div>

    </div>
  `;

}



/* =========================
   COMMAND CARD
========================= */

function renderCommandCard(item) {

  const targetHtml =
    renderTargetSelector(item);


  const commandHtml =
    renderCommandLines(item);


  const infoHtml =
    renderInformationSettings(item);


  const commandBlockHtml =
    renderCommandBlockSection(item);


  const noteHtml =
    item.note
      ? `
        <div class="card-note ${item.tone === "caution" ? "warning" : ""}">
          ※ ${escapeHtml(item.note)}
        </div>
      `
      : "";


  return `
    <article
      class="command-card"
      data-tone="${item.tone || "normal"}"
    >

      <span class="card-category">
        ${escapeHtml(categoryLabel(item.category))}
      </span>


      <h3>
        ${escapeHtml(item.title)}
      </h3>


      <p class="description">
        ${escapeHtml(item.description)}
      </p>


      ${targetHtml}


      ${commandHtml}


      ${infoHtml}


      ${commandBlockHtml}


      ${noteHtml}

    </article>
  `;

}



/* =========================
   SELECTED COMMAND
========================= */

function renderSelectedCommand() {

  const item =
    commands[
      activeCommandIndex
    ];


  if (!item) {

    commandGrid.innerHTML =
      "";

    return;

  }


  commandGrid.innerHTML =
    renderCommandCard(item);


  const list =
    commandsForCategory(
      activeCategory
    );


  const position =
    list.findIndex(
      entry =>
        entry.index === activeCommandIndex
    ) + 1;


  resultMeta.textContent =
    `${categoryLabel(activeCategory)} ` +
    `${String(position).padStart(2, "0")} / ` +
    `${String(list.length).padStart(2, "0")}`;

}



/* =========================
   TARGET
========================= */

function setActiveTarget(target) {

  activeTarget =
    target;


  renderSelectedCommand();

}



/* =========================
   COPY
========================= */

async function copyText(
  text,
  button
) {

  try {

    await navigator.clipboard.writeText(
      text
    );

  } catch {

    const textarea =
      document.createElement(
        "textarea"
      );


    textarea.value =
      text;


    textarea.style.position =
      "fixed";


    textarea.style.opacity =
      "0";


    document.body.appendChild(
      textarea
    );


    textarea.select();


    document.execCommand(
      "copy"
    );


    textarea.remove();

  }


  if (button) {

    const originalText =
      button.textContent;


    button.classList.add(
      "copied"
    );


    button.textContent =
      "コピー済み";


    setTimeout(
      () => {

        button.classList.remove(
          "copied"
        );


        button.textContent =
          originalText;

      },
      1000
    );

  }


  toast.textContent =
    "コマンドをコピーしました";


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      1200
    );

}



/* =========================
   EVENTS
========================= */

categorySelect.addEventListener(
  "change",
  () => {

    activeCategory =
      categorySelect.value;


    activeTarget =
      "@s";


    renderCommandSelect();

  }
);


commandSelect.addEventListener(
  "change",
  () => {

    activeCommandIndex =
      Number(
        commandSelect.value
      );


    activeTarget =
      "@s";


    renderSelectedCommand();

  }
);


document.addEventListener(
  "click",
  event => {


    const targetButton =
      event.target.closest(
        ".target-btn"
      );


    if (targetButton) {

      setActiveTarget(
        targetButton.dataset.target
      );

      return;

    }


    const copyButton =
      event.target.closest(
        "[data-copy]"
      );


    if (copyButton) {

      copyText(
        copyButton.dataset.copy,
        copyButton
      );

    }

  }
);



/* =========================
   LOGO
========================= */

officeLogo.addEventListener(
  "error",
  () => {

    officeLogo.style.display =
      "none";


    logoFallback.style.display =
      "grid";

  }
);


officeLogo.addEventListener(
  "load",
  () => {

    logoFallback.style.display =
      "none";

  }
);



/* =========================
   START
========================= */

renderCategorySelect();

renderCommandSelect();
