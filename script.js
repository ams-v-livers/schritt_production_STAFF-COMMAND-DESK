const categories = [
  {
    id: "survival",
    label: "生存・安全"
  },

  {
    id: "gamemode",
    label: "ゲームモード"
  },

  {
    id: "teleport",
    label: "テレポート"
  },

  {
    id: "world",
    label: "ワールド管理"
  },

  {
    id: "player",
    label: "プレイヤー管理"
  },

  {
    id: "commandblock",
    label: "コマンドブロック"
  },

  {
    id: "entity",
    label: "MOB・エンティティ"
  },

  {
    id: "utility",
    label: "運営・便利"
  }
];



/* ========================================
   コマンドブロック基本設定
======================================== */

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
    condition: "条件付き / 無条件",
    power: "常時実行"
  }

};



/* ========================================
   コマンド一覧
======================================== */

const commands = [

  /* =====================================
     生存・安全
  ===================================== */

  {
    category: "survival",

    title:
      "通常ダメージでほぼ死亡しない",

    description:
      "サバイバルのまま高レベルの耐性を常時付与します。戦闘・爆発など、多くの通常ダメージをほぼ無効化します。",

    commands: [
      "/effect give @a minecraft:resistance infinite 255 true"
    ],

    repeat: true,

    settings:
      commandBlockDefaults.repeat,

    tone:
      "caution",

    note:
      "/kill や奈落など、一部の特殊な死亡要因まで完全に防げるわけではありません。"
  },


  {
    category: "survival",

    title:
      "体力を常時高速回復",

    description:
      "ダメージを受けた場合でも体力を高速で自動回復します。耐性コマンドとの併用がおすすめです。",

    commands: [
      "/effect give @a minecraft:regeneration infinite 255 true"
    ],

    repeat: true,

    settings:
      commandBlockDefaults.repeat
  },


  {
    category: "survival",

    title:
      "空腹ゲージを常に満タン",

    description:
      "サバイバルモードのまま空腹を回復させ続けます。走り続けるイベントなどにも使用できます。",

    commands: [
      "/effect give @a minecraft:saturation 1 255 true"
    ],

    repeat: true,

    settings:
      commandBlockDefaults.repeat
  },


  {
    category: "survival",

    title:
      "死亡してもアイテムを落とさない",

    description:
      "死亡した場合でもインベントリと経験値を保持します。死亡そのものを防ぐ設定ではありません。",

    commands: [
      "/gamerule keepInventory true",
      "/gamerule keepInventory false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "survival",

    title:
      "落下ダメージを無効化",

    description:
      "高所から落下しても落下ダメージを受けなくなります。",

    commands: [
      "/gamerule fallDamage false",
      "/gamerule fallDamage true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "survival",

    title:
      "炎ダメージを無効化",

    description:
      "炎や溶岩などによる火炎ダメージを無効化します。",

    commands: [
      "/gamerule fireDamage false",
      "/gamerule fireDamage true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "survival",

    title:
      "溺水ダメージを無効化",

    description:
      "水中で酸素がなくなった場合でも溺水ダメージを受けなくなります。",

    commands: [
      "/gamerule drowningDamage false",
      "/gamerule drowningDamage true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "survival",

    title:
      "凍結ダメージを無効化",

    description:
      "粉雪などによる凍結ダメージを無効化します。",

    commands: [
      "/gamerule freezeDamage false",
      "/gamerule freezeDamage true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "survival",

    title:
      "全員のエフェクトを解除",

    description:
      "耐性・再生・満腹など、全プレイヤーに付与されているエフェクトを解除します。",

    commands: [
      "/effect clear @a"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "survival",

    title:
      "自分のエフェクトだけ解除",

    description:
      "コマンドを実行したプレイヤー自身に付与されているエフェクトを解除します。",

    commands: [
      "/effect clear @s"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "チャットから自分で実行する用途です。"
  },



  /* =====================================
     ゲームモード
  ===================================== */

  {
    category: "gamemode",

    title:
      "自分をサバイバルに変更",

    description:
      "自分のゲームモードをサバイバルへ変更します。",

    commands: [
      "/gamemode survival @s"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "@s はチャットから自分で実行する場合に使用します。"
  },


  {
    category: "gamemode",

    title:
      "自分をクリエイティブに変更",

    description:
      "建築・確認・運営作業などを行う際、自分をクリエイティブへ変更します。",

    commands: [
      "/gamemode creative @s"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "@s はチャットから自分で実行する場合に使用します。"
  },


  {
    category: "gamemode",

    title:
      "自分をスペクテイターに変更",

    description:
      "地形確認・地下確認・観戦など、ワールドへ干渉せず確認したい場合に使用します。",

    commands: [
      "/gamemode spectator @s"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "@s はチャットから自分で実行する場合に使用します。"
  },


  {
    category: "gamemode",

    title:
      "自分をアドベンチャーに変更",

    description:
      "ブロック破壊などを制限したいイベント・配布マップなどで使用します。",

    commands: [
      "/gamemode adventure @s"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "@s はチャットから自分で実行する場合に使用します。"
  },


  {
    category: "gamemode",

    title:
      "指定プレイヤーをサバイバルに変更",

    description:
      "プレイヤー名を指定して、そのプレイヤーだけをサバイバルへ変更します。",

    commands: [
      "/gamemode survival プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "gamemode",

    title:
      "指定プレイヤーをクリエイティブに変更",

    description:
      "プレイヤー名を指定して、そのプレイヤーだけをクリエイティブへ変更します。",

    commands: [
      "/gamemode creative プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "gamemode",

    title:
      "指定プレイヤーをスペクテイターに変更",

    description:
      "指定したプレイヤーだけをスペクテイターモードへ変更します。",

    commands: [
      "/gamemode spectator プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "gamemode",

    title:
      "全員をサバイバルに変更",

    description:
      "オンライン中の全プレイヤーをまとめてサバイバルへ変更します。",

    commands: [
      "/gamemode survival @a"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "オンライン中の運営スタッフも対象になります。"
  },


  {
    category: "gamemode",

    title:
      "全員をアドベンチャーに変更",

    description:
      "イベント開始時などに、全プレイヤーをまとめてアドベンチャーモードへ変更します。",

    commands: [
      "/gamemode adventure @a"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "オンライン中の運営スタッフも対象になります。"
  },



  /* =====================================
     テレポート
  ===================================== */

  {
    category: "teleport",

    title:
      "自分を指定座標へTP",

    description:
      "X Y Z を目的地の座標に変更して使用します。",

    commands: [
      "/tp @s X Y Z"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "例：/tp @s 100 80 -250。チャットから自分で実行する用途です。"
  },


  {
    category: "teleport",

    title:
      "指定プレイヤーを座標へTP",

    description:
      "プレイヤーの救出・イベント集合・スタート地点への移動などに使用します。",

    commands: [
      "/tp プレイヤー名 X Y Z"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "teleport",

    title:
      "自分をプレイヤーの場所へTP",

    description:
      "指定したプレイヤーの現在地へ自分が移動します。",

    commands: [
      "/tp @s プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "チャットから自分で実行する用途です。"
  },


  {
    category: "teleport",

    title:
      "プレイヤーを自分の場所へ呼ぶ",

    description:
      "指定したプレイヤーを自分の現在地へテレポートさせます。",

    commands: [
      "/tp プレイヤー名 @s"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "チャットから自分で実行する用途です。"
  },


  {
    category: "teleport",

    title:
      "プレイヤーを別プレイヤーへTP",

    description:
      "指定プレイヤーを、別の指定プレイヤーの現在地へ移動します。",

    commands: [
      "/tp 移動させるプレイヤー名 移動先プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "teleport",

    title:
      "全員を指定座標へ集合",

    description:
      "イベント開始地点などへ、オンライン中の全員を一括でテレポートします。",

    commands: [
      "/tp @a X Y Z"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "全員が強制移動するため、座標を確認してから実行してください。"
  },


  {
    category: "teleport",

    title:
      "現在地から50ブロック上へ移動",

    description:
      "相対座標を利用して、現在位置から50ブロック上へ移動します。",

    commands: [
      "/tp @s ~ ~50 ~"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "チャットから自分で実行する用途です。"
  },


  {
    category: "teleport",

    title:
      "現在地から10ブロック前後へ移動",

    description:
      "~ を使った相対座標移動です。数字を変更すれば移動量を調整できます。",

    commands: [
      "/tp @s ~10 ~ ~",
      "/tp @s ~-10 ~ ~",
      "/tp @s ~ ~ ~10",
      "/tp @s ~ ~ ~-10"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "これはワールド座標基準のX/Z方向移動です。"
  },



  /* =====================================
     ワールド管理
  ===================================== */

  {
    category: "world",

    title:
      "昼にする",

    description:
      "ワールドの時間を昼へ変更します。",

    commands: [
      "/time set day"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "正午にする",

    description:
      "ワールドの時間を正午へ変更します。",

    commands: [
      "/time set noon"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "夜にする",

    description:
      "ワールドの時間を夜へ変更します。",

    commands: [
      "/time set night"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "深夜にする",

    description:
      "ワールドの時間を深夜へ変更します。",

    commands: [
      "/time set midnight"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "時間を固定",

    description:
      "昼夜サイクルを停止します。現在の時間帯が維持されます。",

    commands: [
      "/gamerule doDaylightCycle false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "時間の流れを再開",

    description:
      "停止していた昼夜サイクルを再開します。",

    commands: [
      "/gamerule doDaylightCycle true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "晴れにする",

    description:
      "ワールドの天候を晴れへ変更します。",

    commands: [
      "/weather clear"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "雨にする",

    description:
      "ワールドの天候を雨へ変更します。",

    commands: [
      "/weather rain"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "雷雨にする",

    description:
      "ワールドの天候を雷雨へ変更します。",

    commands: [
      "/weather thunder"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "天候変化を停止",

    description:
      "現在の天候を維持し、自然な天候変化を停止します。",

    commands: [
      "/gamerule doWeatherCycle false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "天候変化を再開",

    description:
      "停止していた自然な天候変化を再開します。",

    commands: [
      "/gamerule doWeatherCycle true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "難易度をピースフルにする",

    description:
      "ワールド全体の難易度をピースフルへ変更します。",

    commands: [
      "/difficulty peaceful"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "難易度をイージーにする",

    description:
      "ワールド全体の難易度をイージーへ変更します。",

    commands: [
      "/difficulty easy"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "難易度をノーマルにする",

    description:
      "ワールド全体の難易度をノーマルへ変更します。",

    commands: [
      "/difficulty normal"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "難易度をハードにする",

    description:
      "ワールド全体の難易度をハードへ変更します。",

    commands: [
      "/difficulty hard"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "MOBの自然スポーンを停止",

    description:
      "自然発生するMOBのスポーンを停止します。既に存在しているMOBは消えません。",

    commands: [
      "/gamerule doMobSpawning false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "MOBの自然スポーンを再開",

    description:
      "停止していたMOBの自然スポーンを再開します。",

    commands: [
      "/gamerule doMobSpawning true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "MOBによる地形破壊を停止",

    description:
      "クリーパー・エンダーマンなどによるブロックへの影響を抑えます。",

    commands: [
      "/gamerule mobGriefing false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "MOBによる地形破壊を再開",

    description:
      "MOBによる通常の地形への干渉を再開します。",

    commands: [
      "/gamerule mobGriefing true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "炎の延焼を停止",

    description:
      "火事によるブロックへの延焼を停止します。",

    commands: [
      "/gamerule doFireTick false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "炎の延焼を再開",

    description:
      "通常の炎の延焼処理を再開します。",

    commands: [
      "/gamerule doFireTick true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "ワールドスポーンを現在地に設定",

    description:
      "新規参加者などの基本スポーン地点を現在位置へ設定します。",

    commands: [
      "/setworldspawn ~ ~ ~"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "チャットから自分で実行するのがおすすめです。"
  },


  {
    category: "world",

    title:
      "ワールドスポーンを指定座標に設定",

    description:
      "ワールド全体の基本スポーン地点を指定座標へ変更します。",

    commands: [
      "/setworldspawn X Y Z"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "死亡メッセージを非表示",

    description:
      "プレイヤーが死亡した際の死亡メッセージをチャットへ表示しないようにします。",

    commands: [
      "/gamerule showDeathMessages false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "world",

    title:
      "死亡メッセージを表示",

    description:
      "プレイヤーの死亡メッセージを通常通り表示します。",

    commands: [
      "/gamerule showDeathMessages true"
    ],

    settings:
      commandBlockDefaults.single
  },



  /* =====================================
     プレイヤー管理
  ===================================== */

  {
    category: "player",

    title:
      "自分のリスポーン地点を現在地に設定",

    description:
      "死亡した際の復活地点を現在位置へ設定します。",

    commands: [
      "/spawnpoint @s ~ ~ ~"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "チャットから自分で実行する用途です。"
  },


  {
    category: "player",

    title:
      "指定プレイヤーのリスポーン地点を現在地に設定",

    description:
      "指定したプレイヤーの復活地点を、コマンド実行位置へ設定します。",

    commands: [
      "/spawnpoint プレイヤー名 ~ ~ ~"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "player",

    title:
      "リスポーン地点を座標指定",

    description:
      "指定したプレイヤーの復活地点を固定座標へ設定します。",

    commands: [
      "/spawnpoint プレイヤー名 X Y Z"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "player",

    title:
      "指定プレイヤーのアイテムを全削除",

    description:
      "指定プレイヤーのインベントリ内アイテムをすべて削除します。",

    commands: [
      "/clear プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "実行すると元に戻せません。対象プレイヤーを必ず確認してください。"
  },


  {
    category: "player",

    title:
      "自分のアイテムを全削除",

    description:
      "自分のインベントリ内アイテムをすべて削除します。",

    commands: [
      "/clear @s"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "チャットから自分で実行する用途です。"
  },


  {
    category: "player",

    title:
      "アイテムを付与",

    description:
      "指定したプレイヤーへアイテムを付与します。アイテムIDと個数を変更して使用します。",

    commands: [
      "/give プレイヤー名 minecraft:diamond 1"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "player",

    title:
      "経験値レベルを追加",

    description:
      "指定したプレイヤーへ経験値レベルを追加します。",

    commands: [
      "/experience add プレイヤー名 10 levels"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "player",

    title:
      "経験値レベルを指定",

    description:
      "指定プレイヤーのレベルを指定した数値へ設定します。",

    commands: [
      "/experience set プレイヤー名 30 levels"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "player",

    title:
      "指定プレイヤーを強制死亡",

    description:
      "スタック・進行不能時などに指定プレイヤーを強制的に死亡させます。",

    commands: [
      "/kill プレイヤー名"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "keepInventory がOFFの場合は所持アイテムを落とします。"
  },



  /* =====================================
     コマンドブロック
  ===================================== */

  {
    category: "commandblock",

    title:
      "通常コマンドブロックを入手",

    description:
      "通常インベントリには表示されないコマンドブロックを入手します。",

    commands: [
      "/give @s minecraft:command_block 1"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "このコマンドはチャットから実行してください。"
  },


  {
    category: "commandblock",

    title:
      "リピートコマンドブロックを入手",

    description:
      "常時処理を実行するためのリピートコマンドブロックを入手します。",

    commands: [
      "/give @s minecraft:repeating_command_block 1"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "このコマンドはチャットから実行してください。"
  },


  {
    category: "commandblock",

    title:
      "チェーンコマンドブロックを入手",

    description:
      "複数のコマンドを順番に繋げるためのチェーンコマンドブロックを入手します。",

    commands: [
      "/give @s minecraft:chain_command_block 1"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "このコマンドはチャットから実行してください。"
  },


  {
    category: "commandblock",

    title:
      "単発で1回だけ実行",

    description:
      "ボタンやレバーを押した時だけ1回コマンドを実行する基本設定です。",

    commands: [
      "衝撃 / 無条件 / 動力が必要"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "commandblock",

    title:
      "常時リピート",

    description:
      "満腹・回復・耐性などを常時維持する場合に使用します。",

    commands: [
      "リピート / 無条件 / 常時実行"
    ],

    repeat: true,

    settings:
      commandBlockDefaults.repeat,

    tone:
      "caution",

    note:
      "TPなどをリピートするとプレイヤーが移動できなくなるため注意してください。"
  },


  {
    category: "commandblock",

    title:
      "チェーンで続けて実行",

    description:
      "複数のコマンドブロックを繋ぎ、前の処理から続けて実行します。",

    commands: [
      "チェーン / 無条件 / 常時実行"
    ],

    settings: {
      type:
        "チェーン",

      condition:
        "無条件",

      power:
        "常時実行"
    }
  },


  {
    category: "commandblock",

    title:
      "前のコマンド成功時だけ実行",

    description:
      "直前のコマンドブロックが成功した場合のみ次の処理を実行します。",

    commands: [
      "チェーン / 条件付き / 常時実行"
    ],

    settings: {
      type:
        "チェーン",

      condition:
        "条件付き",

      power:
        "常時実行"
    }
  },


  {
    category: "commandblock",

    title:
      "コマンドブロックの出力を非表示",

    description:
      "リピートコマンド使用時などに大量の実行ログが表示されるのを防ぎます。",

    commands: [
      "/gamerule commandBlockOutput false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "commandblock",

    title:
      "コマンドブロックの出力を表示",

    description:
      "コマンドブロックの実行結果表示を元に戻します。",

    commands: [
      "/gamerule commandBlockOutput true"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "commandblock",

    title:
      "管理コマンドのフィードバックを非表示",

    description:
      "管理コマンド実行時に表示されるフィードバックメッセージを抑制します。",

    commands: [
      "/gamerule sendCommandFeedback false"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "commandblock",

    title:
      "管理コマンドのフィードバックを表示",

    description:
      "管理コマンドのフィードバック表示を通常状態へ戻します。",

    commands: [
      "/gamerule sendCommandFeedback true"
    ],

    settings:
      commandBlockDefaults.single
  },



  /* =====================================
     MOB・エンティティ
  ===================================== */

  {
    category: "entity",

    title:
      "地面に落ちているアイテムを全削除",

    description:
      "地面にドロップしているアイテムエンティティだけを全削除します。",

    commands: [
      "/kill @e[type=minecraft:item]"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "必要なドロップアイテムもすべて消えます。"
  },


  {
    category: "entity",

    title:
      "経験値オーブを全削除",

    description:
      "ワールド内に存在する経験値オーブを全削除します。",

    commands: [
      "/kill @e[type=minecraft:experience_orb]"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "entity",

    title:
      "ゾンビだけ全削除",

    description:
      "ワールド内に存在するゾンビだけを削除します。",

    commands: [
      "/kill @e[type=minecraft:zombie]"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "entity",

    title:
      "半径30ブロック以内のゾンビを削除",

    description:
      "コマンド実行位置から30ブロック以内にいるゾンビのみ削除します。",

    commands: [
      "/kill @e[type=minecraft:zombie,distance=..30]"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "entity",

    title:
      "プレイヤー以外の全エンティティを削除",

    description:
      "ワールド内のプレイヤー以外のエンティティをすべて削除します。",

    commands: [
      "/kill @e[type=!minecraft:player]"
    ],

    settings:
      commandBlockDefaults.single,

    tone:
      "caution",

    note:
      "MOBだけではありません。落下アイテム・防具立て・額縁なども消えるため非常に危険です。"
  },



  /* =====================================
     運営・便利
  ===================================== */

  {
    category: "utility",

    title:
      "自分の現在座標を確認",

    description:
      "自分の現在位置データをコマンドで確認します。",

    commands: [
      "/data get entity @s Pos"
    ],

    settings:
      commandBlockDefaults.single,

    note:
      "Java版ではF3キーで座標を確認する方法もあります。"
  },


  {
    category: "utility",

    title:
      "現在の時刻を確認",

    description:
      "ワールド内の現在時刻を数値で確認します。",

    commands: [
      "/time query daytime"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "経過ゲーム時間を確認",

    description:
      "ワールド作成からのゲーム時間を確認します。",

    commands: [
      "/time query gametime"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "全員へ運営メッセージ",

    description:
      "全プレイヤーのチャットへ運営からのお知らせを表示します。",

    commands: [
      `/tellraw @a {"text":"運営からのお知らせ","color":"gold"}`
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "全員の画面中央へタイトル表示",

    description:
      "イベント開始・終了などを画面中央へ大きく表示します。",

    commands: [
      `/title @a title {"text":"EVENT START","color":"gold","bold":true}`
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "表示中のタイトルを消す",

    description:
      "全プレイヤーに表示されているタイトルを消します。",

    commands: [
      "/title @a clear"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "keepInventoryの現在値を確認",

    description:
      "死亡時のアイテム保持設定が現在ONかOFFか確認します。",

    commands: [
      "/gamerule keepInventory"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "MOB自然スポーン設定を確認",

    description:
      "MOBの自然スポーンが現在ONかOFFか確認します。",

    commands: [
      "/gamerule doMobSpawning"
    ],

    settings:
      commandBlockDefaults.single
  },


  {
    category: "utility",

    title:
      "mobGriefing設定を確認",

    description:
      "MOBによる地形干渉設定が現在ONかOFFか確認します。",

    commands: [
      "/gamerule mobGriefing"
    ],

    settings:
      commandBlockDefaults.single
  }

];



/* ========================================
   サバイバルおすすめセット
======================================== */

const survivalPreset = [

  {
    title:
      "① 通常ダメージをほぼ無効化",

    note:
      "リピート / 無条件 / 常時実行",

    command:
      "/effect give @a minecraft:resistance infinite 255 true"
  },


  {
    title:
      "② 体力を自動回復",

    note:
      "リピート / 無条件 / 常時実行",

    command:
      "/effect give @a minecraft:regeneration infinite 255 true"
  },


  {
    title:
      "③ 空腹を常に満タン",

    note:
      "リピート / 無条件 / 常時実行",

    command:
      "/effect give @a minecraft:saturation 1 255 true"
  }

];



/* ========================================
   HTML取得
======================================== */

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

const presetRoot =
  document.getElementById("survivalPreset");



/* ========================================
   初期状態
======================================== */

let activeCategory =
  "survival";

let activeCommandIndex =
  0;

let toastTimer;



/* ========================================
   HTMLエスケープ
======================================== */

function escapeHtml(value) {

  return String(value).replace(
    /[&<>'"]/g,
    (char) => ({

      "&":
        "&amp;",

      "<":
        "&lt;",

      ">":
        "&gt;",

      "'":
        "&#039;",

      '"':
        "&quot;"

    }[char])
  );

}



/* ========================================
   カテゴリ名取得
======================================== */

function categoryLabel(id) {

  return (
    categories.find(
      (item) =>
        item.id === id
    )?.label || id
  );

}



/* ========================================
   カテゴリ内のコマンド取得
======================================== */

function commandsForCategory(categoryId) {

  return commands

    .map(
      (item, index) => ({
        item,
        index
      })
    )

    .filter(
      (entry) =>
        entry.item.category === categoryId
    );

}



/* ========================================
   カテゴリプルダウン
======================================== */

function renderCategorySelect() {

  categorySelect.innerHTML =
    categories

      .map((category) => {

        const count =
          commands.filter(
            (item) =>
              item.category === category.id
          ).length;


        return `
          <option value="${escapeHtml(category.id)}">
            ${escapeHtml(category.label)}
            （${count}）
          </option>
        `;

      })

      .join("");


  categorySelect.value =
    activeCategory;

}



/* ========================================
   コマンドプルダウン
======================================== */

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
              ${String(position + 1).padStart(2, "0")}
              ｜${escapeHtml(item.title)}
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



/* ========================================
   おすすめセット表示
======================================== */

function renderPreset() {

  presetRoot.innerHTML =
    survivalPreset

      .map((item) => `

        <div class="preset-item">

          <div class="preset-top">

            <strong>
              ${escapeHtml(item.title)}
            </strong>

            <small>
              ${escapeHtml(item.note)}
            </small>

          </div>


          <div class="preset-command">

            <code>
              ${escapeHtml(item.command)}
            </code>

            <button
              class="copy-btn"
              type="button"
              data-copy="${escapeHtml(item.command)}"
            >
              コピー
            </button>

          </div>

        </div>

      `)

      .join("");

}



/* ========================================
   コマンドカード作成
======================================== */

function renderCommandCard(item) {

  const settings =
    item.settings;


  const settingsHtml =
    settings
      ? `

        <div class="settings">

          <div class="setting">

            <span>
              種類
            </span>

            <strong>
              ${escapeHtml(settings.type)}
            </strong>

          </div>


          <div class="setting">

            <span>
              条件
            </span>

            <strong>
              ${escapeHtml(settings.condition)}
            </strong>

          </div>


          <div class="setting">

            <span>
              動力
            </span>

            <strong>
              ${escapeHtml(settings.power)}
            </strong>

          </div>

        </div>

      `
      : "";


  const commandHtml =
    item.commands

      .map(
        (command) => `

          <div class="command-line">

            <code>
              ${escapeHtml(command)}
            </code>

            <button
              class="copy-btn"
              type="button"
              data-copy="${escapeHtml(command)}"
            >
              コピー
            </button>

          </div>

        `
      )

      .join("");


  const noteHtml =
    item.note
      ? `

        <div class="
          card-note
          ${
            item.tone === "caution"
              ? "warning"
              : ""
          }
        ">
          ${escapeHtml(item.note)}
        </div>

      `
      : "";


  const badges = [

    item.repeat

      ? `<span class="badge">
          REPEAT
        </span>`

      : `<span class="badge">
          SINGLE
        </span>`,

    item.tone === "caution"

      ? `<span class="badge accent">
          CAUTION
        </span>`

      : ""

  ].join("");



  return `

    <article
      class="command-card selected-card"

      data-category="${item.category}"

      data-repeat="${
        item.repeat
          ? "true"
          : "false"
      }"

      data-tone="${
        item.tone || "normal"
      }"
    >


      <div class="card-head">

        <span class="card-category">

          ${escapeHtml(
            categoryLabel(
              item.category
            )
          )}

        </span>


        <div class="card-badges">
          ${badges}
        </div>

      </div>



      <h3>
        ${escapeHtml(item.title)}
      </h3>


      <p class="description">
        ${escapeHtml(item.description)}
      </p>


      <div class="command-list">
        ${commandHtml}
      </div>


      ${settingsHtml}


      ${noteHtml}


    </article>

  `;

}



/* ========================================
   選択中コマンド表示
======================================== */

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
      (entry) =>
        entry.index ===
        activeCommandIndex
    ) + 1;


  resultMeta.textContent =
    `${categoryLabel(activeCategory)} ` +
    `${String(position).padStart(2, "0")}` +
    ` / ` +
    `${String(list.length).padStart(2, "0")}`;

}



/* ========================================
   コピー機能
======================================== */

async function copyText(
  text,
  button
) {

  try {

    await navigator.clipboard.writeText(
      text
    );

  } catch (error) {

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

    const original =
      button.textContent;


    button.classList.add(
      "copied"
    );


    button.textContent =
      "コピー済み";


    setTimeout(() => {

      button.classList.remove(
        "copied"
      );


      button.textContent =
        original;

    }, 1000);

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
      () =>
        toast.classList.remove(
          "show"
        ),
      1200
    );

}



/* ========================================
   カテゴリ変更
======================================== */

categorySelect.addEventListener(
  "change",
  () => {

    activeCategory =
      categorySelect.value;


    renderCommandSelect();

  }
);



/* ========================================
   コマンド変更
======================================== */

commandSelect.addEventListener(
  "change",
  () => {

    activeCommandIndex =
      Number(
        commandSelect.value
      );


    renderSelectedCommand();

  }
);



/* ========================================
   コピーボタン
======================================== */

document.addEventListener(
  "click",
  (event) => {

    const button =
      event.target.closest(
        "[data-copy]"
      );


    if (!button) {
      return;
    }


    copyText(
      button.dataset.copy,
      button
    );

  }
);



/* ========================================
   ロゴ
======================================== */

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



/* ========================================
   初期表示
======================================== */

renderPreset();

renderCategorySelect();

renderCommandSelect();
