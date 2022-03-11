const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');
const AvailableLocales = ['en', 'ja', 'ja-Hira', 'th', 'zh-cn'];
const Message = {
    set_value1: {
        'ja': 'value1を[VALUE1]にする',
        'ja-Hira': 'value1を[VALUE1]にする',
        'en': 'set value1 to [VALUE1]',
        'zh-cn': '将 value1 设为 [VALUE1]',
        'th': 'ตั้งค่า value1 เป็น [VALUE1]'
    },
    set_value2: {
        'ja': 'value2を[VALUE2]にする',
        'ja-Hira': 'value2を[VALUE2]にする',
        'en': 'set value2 to [VALUE2]',
        'zh-cn': '将value2设为[VALUE2]',
        'th': 'ตั้งค่า value2 เป็น [VALUE2]'
    },
    set_value3: {
        'ja': 'value3を[VALUE3]にする',
        'ja-Hira': 'value3を[VALUE3]にする',
        'en': 'set value3 to [VALUE3]',
        'zh-cn': '将value3设为[VALUE3]',
        'th': 'ตั้งค่า value3 เป็น [VALUE3]'
    },
    send: {
        'ja': '送る',
        'ja-Hira': 'おくる',
        'en': 'send',
        'zh-cn': '发送',
        'th': 'ส่ง'
    }
};

class Scratch3IFTTTWebhooks {
    constructor (runtime) {
        this.runtime = runtime;
        this.event = '';
        this.key = '';
        this.value1 = '';
        this.value2 = '';
        this.value3 = '';
    }

    getInfo () {
        this.locale = this.setLocale();

        return {
            id: 'iftttWebhooks',
            name: 'IFTTT Webhooks',
            blocks: [
                {
                    opcode: 'setIftttEvent',
                    blockType: BlockType.COMMAND,
                    text: 'IFTTT event :[EVENT]',
                    arguments: {
                        EVENT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'event_name'
                        }
                    }
                },
                {
                    opcode: 'setIftttKey',
                    blockType: BlockType.COMMAND,
                    text: 'IFTTT key:[KEY]',
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'key'
                        }
                    }
                },
                {
                    opcode: 'setValue1',
                    blockType: BlockType.COMMAND,
                    text: Message.set_value1[this.locale],
                    arguments: {
                        VALUE1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'value1'
                        }
                    }
                },
                {
                    opcode: 'setValue2',
                    blockType: BlockType.COMMAND,
                    text: Message.set_value2[this.locale],
                    arguments: {
                        VALUE2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'value2'
                        }
                    }
                },
                {
                    opcode: 'setValue3',
                    blockType: BlockType.COMMAND,
                    text: Message.set_value3[this.locale],
                    arguments: {
                        VALUE3: {
                            type: ArgumentType.STRING,
                            defaultValue: 'value3'
                        }
                    }
                },
                {
                    opcode: 'getIfttt',
                    blockType: BlockType.COMMAND,
                    text: Message.send[this.locale]
                },
                {
                    opcode: 'getEvent',
                    blockType: BlockType.REPORTER,
                    text: 'event'
                },
                {
                    opcode: 'getKey',
                    blockType: BlockType.REPORTER,
                    text: 'key'
                },
                {
                    opcode: 'getValue1',
                    blockType: BlockType.REPORTER,
                    text: 'value1'
                },
                {
                    opcode: 'getValue2',
                    blockType: BlockType.REPORTER,
                    text: 'value2'
                },
                {
                    opcode: 'getValue3',
                    blockType: BlockType.REPORTER,
                    text: 'value3'
                }
            ],
            menus: {
            }
        };
    }

    getIfttt () {
        const value1 = Cast.toString(this.value1);
        const value2 = Cast.toString(this.value2);
        const value3 = Cast.toString(this.value3);
        var jsonData = {"value1": value1, "value2": value2, "value3": value3};
        var xhr = new XMLHttpRequest();
        var url = 'https://ifttt2scratch.herokuapp.com/?event=' + this.event + '&key=' + this.key;
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(jsonData));
    }

    setIftttEvent (args) {
        this.event = Cast.toString(args.EVENT);
    }
    setIftttKey (args) {
        this.key = Cast.toString(args.KEY);
    }
    setValue1 (args) {
        this.value1 = Cast.toString(args.VALUE1);
    }
    setValue2 (args) {
        this.value2 = Cast.toString(args.VALUE2);
    }
    setValue3 (args) {
        this.value3 = Cast.toString(args.VALUE3);
    }

    getEvent () {
        return this.event;
    }
    getKey () {
        return this.key;
    }
    getValue1 () {
        return this.value1;
    }
    getValue2 () {
        return this.value2;
    }
    getValue3 () {
        return this.value3;
    }
    setLocale () {
        let locale = formatMessage.setup().locale;
        if (AvailableLocales.includes(locale)) {
            return locale;
        }
        return 'en';
    }
}

module.exports = Scratch3IFTTTWebhooks;
