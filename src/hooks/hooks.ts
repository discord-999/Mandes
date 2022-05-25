import { OnlyMediaHook } from './only-media';
import { Hook } from '../models/hook';
import { Message } from 'discord.js';
import { CastBoxHook } from './castbox';
import { DisconnectHook } from './disconnect';
import { AutoDeleteHook } from './autodelete';

const hooksList: Hook[] = [
    new OnlyMediaHook(['835947472026599464']),
    new CastBoxHook(['782733951315476500']),
    new DisconnectHook(['782733951315476500']),
    new AutoDeleteHook(['942200618108465222'], 1_000 * 120),
    new AutoDeleteHook(['802205052168437810'], 1_000 * 1),
];

export function hookRouter(msg: Message) {
    hooksList.forEach((h: Hook) => {
        if (h.isEligible(msg)) {
            h.handler(msg);
        }
    });
}