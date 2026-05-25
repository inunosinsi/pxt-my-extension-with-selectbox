//% color="#000000" icon="\uf1e6" block="セレクトボックス付き拡張機能"
namespace myExtensionWithSelectBox {

    export enum MyOptions {
        // % block="選択肢A"
        OptionA = 1,
        // % block="選択肢B"
        OptionB = 2,
        // % block="選択肢C"
        OptionC = 3
    }

    // % block="コマンドを実行： %choice"
    export function hello(choice: MyOptions): void {
        // 選択された値に応じた処理
        switch (choice) {
            case MyOptions.OptionA: // オプションAの時の処理
                basic.showString('a')
                break;
            case MyOptions.OptionB: // オプションBの時の処理
                basic.showString('b')
                break;
            case MyOptions.OptionC: // オプションCの時の処理
                basic.showString('c')
                break;
        }
    }
}
