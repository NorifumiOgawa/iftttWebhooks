const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');

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
                            defaultValue: "event_name"
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
                            defaultValue: "key"
                        }
                    }
                },
                {
                    opcode: 'setValue1',
                    blockType: BlockType.COMMAND,
                    text: 'value1を[VALUE1]にする',
                    arguments: {
                      VALUE1: {
                          type: ArgumentType.STRING,
                          defaultValue: "value1"
                      }
                    }
                },
                {
                    opcode: 'setValue2',
                    blockType: BlockType.COMMAND,
                    text: 'value2を[VALUE2]にする',
                    arguments: {
                      VALUE2: {
                          type: ArgumentType.STRING,
                          defaultValue: "value2"
                      }
                    }
                },
                {
                    opcode: 'setValue3',
                    blockType: BlockType.COMMAND,
                    text: 'value3を[VALUE3]にする',
                    arguments: {
                      VALUE3: {
                          type: ArgumentType.STRING,
                          defaultValue: "value3"
                      }
                    }
                },
                {
                    opcode: 'getIfttt',
                    blockType: BlockType.COMMAND,
                    text: '送る'
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

    getIfttt (args) {
        const value1 = Cast.toString(this.value1);
        const value2 = Cast.toString(this.value2);
        const value3 = Cast.toString(this.value3);
        var json_data = { "value1": value1, "value2": value2, "value3": value3};
        var xhr = new XMLHttpRequest();
        var url = 'https://ifttt2scratch.herokuapp.com/?event=' + this.event + '&key=' + this.key
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(json_data));
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
}

module.exports = Scratch3IFTTTWebhooks;
