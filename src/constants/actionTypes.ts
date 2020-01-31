/**
 * This file references redux action types, not typescript types
 */

export const INITIAL_GAMESTATE = 'INITIAL_GAMESTATE';
export const SET_USERFEEDBACK = 'SET_USERFEEDBACK';
export const START_PLAN = 'START_PLAN';
export const CANCEL_PLAN = 'CANCEL_PLAN';
export const CONFIRM_PLAN = 'CONFIRM_PLAN';
export const PLANNING_SELECT = 'PLANNING_SELECT';
export const PLAN_WAS_CONFIRMED = 'PLAN_WAS_CONFIRMED';
export const DELETE_PLAN = 'DELETE_PLAN';
export const UNDO_MOVE = 'UNDO_MOVE';
export const NEWS_PHASE = 'NEWS_PHASE';
export const PURCHASE_PHASE = 'PURCHASE_PHASE';
export const SHOP_PURCHASE = 'SHOP_PURCHASE';
export const SHOP_REFUND = 'SHOP_REFUND';
export const SHOP_TRANSFER = 'SHOP_TRANSFER';
export const COMBAT_PHASE = 'COMBAT_PHASE';
export const NEW_ROUND = 'NEW_ROUND';
export const SLICE_CHANGE = 'SLICE_CHANGE';
export const PLACE_PHASE = 'PLACE_PHASE';
export const MENU_SELECT = 'MENU_SELECT';
export const BATTLEPOPUP_MINIMIZE_TOGGLE = 'BATTLEPOPUP_MINIMIZE_TOGGLE';
export const POSITION_SELECT = 'POSITION_SELECT';
export const PIECE_CLICK = 'PIECE_CLICK';
export const PIECE_CLEAR_SELECTION = 'PIECE_CLEAR_SELECTION';
export const MAIN_BUTTON_CLICK = 'MAIN_BUTTON_CLICK';
export const PIECE_PLACE = 'PIECE_PLACE';
export const BATTLE_PIECE_SELECT = 'BATTLE_PIECE_SELECT';
export const TARGET_PIECE_SELECT = 'TARGET_PIECE_SELECT';
export const ENEMY_PIECE_SELECT = 'ENEMY_PIECE_SELECT';
export const EVENT_BATTLE = 'EVENT_BATTLE';
export const EVENT_REFUEL = 'EVENT_REFUEL';
export const UNDO_FUEL_SELECTION = 'UNDO_FUEL_SELECTION';
export const BATTLE_FIGHT_RESULTS = 'BATTLE_FIGHT_RESULTS';
export const REFUEL_RESULTS = 'REFUEL_RESULTS';
export const REFUELPOPUP_MINIMIZE_TOGGLE = 'REFUELPOPUP_MINIMIZE_TOGGLE';
export const NO_MORE_EVENTS = 'NO_MORE_EVENTS';
export const CLEAR_BATTLE = 'CLEAR_BATTLE';
export const TANKER_CLICK = 'TANKER_CLICK';
export const AIRCRAFT_CLICK = 'AIRCRAFT_CLICK';
export const NEWSPOPUP_MINIMIZE_TOGGLE = 'NEWSPOPUP_MINIMIZE_TOGGLE';
export const PIECE_OPEN_ACTION = 'PIECE_OPEN_ACTION';
export const PIECE_CLOSE_ACTION = 'PIECE_CLOSE_ACTION';
export const INNER_PIECE_CLICK_ACTION = 'INNER_PIECE_CLICK_ACTION';
export const OUTER_PIECE_CLICK_ACTION = 'OUTER_PIECE_CLICK_ACTION';
export const INNER_TRANSPORT_PIECE_CLICK_ACTION = 'INNER_TRANSPORT_PIECE_CLICK_ACTION';
export const UPDATE_FLAGS = 'UPDATE_FLAGS';
export const SEA_MINE_HIT_NOTIFICATION = 'SEA_MINE_HIT_NOTIFICATION';
export const SEA_MINE_NOTIFY_CLEAR = 'SEA_MINE_NOTIFY_CLEAR';
export const UPDATE_AIRFIELDS = 'UPDATE_AIRFIELDS';
export const RODS_FROM_GOD_SELECTING = 'RODS_FROM_GOD_SELECTING';
export const RODS_FROM_GOD_SELECTED = 'RODS_FROM_GOD_SELECTED';
export const INSURGENCY_SELECTING = 'INSURGENCY_SELECTING';
export const INSURGENCY_SELECTED = 'INSURGENCY_SELECTED';
export const BIO_WEAPON_SELECTING = 'BIO_WEAPON_SELECTING';
export const BIO_WEAPON_SELECTED = 'BIO_WEAPON_SELECTED';
export const REMOTE_SENSING_SELECTING = 'REMOTE_SENSING_SELECTING';
export const REMOTE_SENSING_SELECTED = 'REMOTE_SENSING_SELECTED';
export const RAISE_MORALE_SELECTING = 'RAISE_MORALE_SELECTING';
export const RAISE_MORALE_SELECTED = 'RAISE_MORALE_SELECTED';
export const COMM_INTERRUPT_SELECTING = 'COMM_INTERRUPT_SELECTING';
export const COMM_INTERRUP_SELECTED = 'COMM_INTERRUPT_SELECTED';
export const GOLDEN_EYE_SELECTING = 'GOLDEN_EYE_SELECTING';
export const GOLDEN_EYE_SELECTED = 'GOLDEN_EYE_SELECTED';
export const HIGHLIGHT_POSITIONS = 'HIGHLIGHT_POSITIONS';
export const SEA_MINE_SELECTING = 'SEA_MINE_SELECTING';
export const SEA_MINE_SELECTED = 'SEA_MINE_SELECTED';

export const MISSILE_SELECTING = 'MISSILE_SELECTING';
export const MISSILE_SELECTED = 'MISSILE_SELECTED';

export const MISSILE_DISRUPT_SELECTED = 'MISSILE_DISRUPT_SELECTED';
export const MISSILE_DISRUPT_SELECTING = 'MISSILE_DISRUPT_SELECTING';

export const BOMBARDMENT_SELECTING = 'BOMBARDMENT_SELECTING';
export const BOMBARDMENT_SELECTED = 'BOMBARDMENT_SELECTED';

export const NUKE_SELECTING = 'NUKE_SELECTING';
export const NUKE_SELECTED = 'NUKE_SELECTED';

export const SAM_DELETED_PIECES = 'SAM_DELETED_PIECES';
export const CLEAR_SAM_DELETE = 'CLEAR_SAM_DELETE';

export const ANTISAT_HIT_ACTION = 'ANTISAT_HIT_ACTION';
export const REMOTE_SENSING_HIT_ACTION = 'REMOTE_SENSING_HIT_ACTION';
export const ANTISAT_SELECTED = 'ANTISAT_SELECTED';

export const DRONE_SWARM_SELECTING = 'DRONE_SWARM_SELECTING';
export const DRONE_SWARM_SELECTED = 'DRONE_SWARM_SELECTED';
export const DRONE_SWARM_HIT_NOTIFICATION = 'DRONE_SWARM_HIT_NOTIFICATION';
export const DRONE_SWARM_NOTIFY_CLEAR = 'DRONE_SWARM_NOTIFY_CLEAR';

export const ATC_SCRAMBLE_SELECTED = 'ATC_SCRAMBLE_SELECTED';
export const ATC_SCRAMBLE_SELECTING = 'ATC_SCRAMBLE_SELECTING';

export const CYBER_DEFENSE_SELECTED = 'CYBER_DEFENSE_SELECTED';

export const CYBER_DEFENSE_CHECK = 'CYBER_DEFENSE_CHECK';

export const SERVER_SHOP_PURCHASE_REQUEST = 'SERVER_SHOP_PURCHASE_REQUEST';
export const SERVER_SHOP_REFUND_REQUEST = 'SERVER_SHOP_REFUND_REQUEST';
export const SERVER_SHOP_CONFIRM_PURCHASE = 'SERVER_SHOP_CONFIRM_PURCHASE';
export const SERVER_CONFIRM_PLAN = 'SERVER_CONFIRM_PLAN';
export const SERVER_DELETE_PLAN = 'SERVER_DELETE_PLAN';
export const SERVER_PIECE_PLACE = 'SERVER_PIECE_PLACE';
export const SERVER_MAIN_BUTTON_CLICK = 'SERVER_MAIN_BUTTON_CLICK';
export const SERVER_CONFIRM_BATTLE_SELECTION = 'SERVER_CONFIRM_BATTLE_SELECTION';
export const SERVER_CONFIRM_FUEL_SELECTION = 'SERVER_CONFIRM_FUEL_SELECTION';
export const SERVER_RODS_FROM_GOD_CONFIRM = 'SERVER_RODS_FROM_GOD_CONFIRM';
export const SERVER_REMOTE_SENSING_CONFIRM = 'SERVER_REMOTE_SENSING_CONFIRM';
export const SERVER_INSURGENCY_CONFIRM = 'SERVER_INSURGENCY_CONFIRM';
export const SERVER_BIOLOGICAL_WEAPONS_CONFIRM = 'SERVER_BIOLOGICAL_WEAPONS_CONFIRM';
export const SERVER_RAISE_MORALE_CONFIRM = 'SERVER_RAISE_MORALE_CONFIRM';
export const SERVER_COMM_INTERRUPT_CONFIRM = 'SERVER_COMM_INTERRUPT_CONFIRM';
export const SERVER_GOLDEN_EYE_CONFIRM = 'SERVER_GOLDEN_EYE_CONFIRM';
export const SERVER_INNER_PIECE_CLICK = 'SERVER_INNER_PIECE_CLICK';
export const SERVER_INNER_TRANSPORT_PIECE_CLICK = 'SERVER_INNER_TRANSPORT_PIECE_CLICK';
export const SERVER_OUTER_PIECE_CLICK = 'SERVER_OUTER_PIECE_CLICK';
export const SERVER_SEA_MINE_CONFIRM = 'SERVER_SEA_MINE_CONFIRM';
export const SERVER_DRONE_SWARM_CONFIRM = 'SERVER_DRONE_SWARM_CONFIRM';
export const SERVER_ATC_SCRAMBLE_CONFIRM = 'SERVER_ATC_SCRAMBLE_CONFIRM';
export const SERVER_NUKE_CONFIRM = 'SERVER_NUKE_CONFIRM';
export const SERVER_MISSILE_CONFIRM = 'SERVER_MISSILE_CONFIRM';
export const SERVER_BOMBARDMENT_CONFIRM = 'SERVER_BOMBARDMENT_CONFIRM';
export const SERVER_ANTISAT_CONFIRM = 'SERVER_ANTISAT_CONFIRM';
export const SERVER_MISSILE_DISRUPT_CONFIRM = 'SERVER_MISSILE_DISRUPT_CONFIRM';
export const SERVER_CYBER_DEFENSE_CONFIRM = 'SERVER_CYBER_DEFENSE_CONFIRM';
export const SERVER_CYBER_DEFENSE_CHECK = 'SERVER_CYBER_DEFENSE_CHECK';
