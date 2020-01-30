import { Dispatch } from 'redux';
import { emit, FullState } from '../../';
import { COMBAT_PHASE_ID, SERVER_CYBER_DEFENSE_CONFIRM, SLICE_PLANNING_ID } from '../../../../../constants';
import { CyberDefenseRequestAction, InvItemType } from '../../../../../types';
import { setUserfeedbackAction } from '../setUserfeedbackAction';

export const cyberDominance = (invItem: InvItemType) => {
    return (dispatch: Dispatch, getState: () => FullState, sendToServer: typeof emit) => {
        const { gameInfo, capabilities } = getState();

        const { gamePhase, gameSlice } = gameInfo;

        if (gamePhase !== COMBAT_PHASE_ID) {
            dispatch(setUserfeedbackAction('wrong phase for cyber defense dude.'));
            return;
        }

        if (gameSlice !== SLICE_PLANNING_ID) {
            dispatch(setUserfeedbackAction('must be in planning to use cyber defense attack.'));
            return;
        }

        const { cyberDefenseIsActive } = capabilities;
        if (cyberDefenseIsActive) {
            dispatch(setUserfeedbackAction('already active bro........'));
            return;
        }

        if (!window.confirm('Are you sure you want to use cyber dominance? (cyber defense)')) {
            return;
        }

        const cyberDefenseRequestAction: CyberDefenseRequestAction = {
            type: SERVER_CYBER_DEFENSE_CONFIRM,
            payload: {
                invItem
            }
        };

        sendToServer(cyberDefenseRequestAction);
    };
};
