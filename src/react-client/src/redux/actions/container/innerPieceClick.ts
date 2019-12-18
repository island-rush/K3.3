import { SOCKET_CLIENT_SENDING_ACTION } from "../../../constants/otherConstants";
import { SERVER_INNER_PIECE_CLICK } from "../actionTypes";
import { PieceType } from "../../../constants/interfaces";

const innerPieceClick = (selectedPiece: PieceType, containerPiece: PieceType) => {
    return (dispatch: any, getState: any, emit: any) => {
        //TODO: figure out if inner piece click is allowed

        const clientAction = {
            type: SERVER_INNER_PIECE_CLICK,
            payload: {
                selectedPiece,
                containerPiece
            }
        };

        emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);

        // dispatch({
        //     type: INNER_PIECE_CLICK_ACTION,
        //     payload: {
        //         selectedPiece
        //     }
        // });
    };
};

export default innerPieceClick;
