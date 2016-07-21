declare module "keymirror" {
    interface inputKeymirror{ [index: string]: string; }
    export default function(x:inputKeymirror ):any;
}
// var Player: { [index: string]: string; } = { Pitcher: "岩田", Catcher: "梅野" };