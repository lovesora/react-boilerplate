import {AT_MODAL} from '../constants/action_types';

export function initData (data) {
    return {
        type: AT_MODAL.INIT_DATA,
        payload: data
    };
}

export function toggleAward (isOpen) {
    return {
        type: AT_MODAL.AWARD.TOGGLE,
        payload: isOpen
    };
}

export function setAwardModalData (data) {
    return {
        type: AT_MODAL.AWARD.SET_DATA,
        payload: data
    }
}

export function toggleDesc (isOpen, text) {
    let payload = text == undefined ? {isOpen} : {isOpen, text} 
    return {
        type: AT_MODAL.DESC.TOGGLE,
        payload: payload
    };
}

export function toggleCode (isOpen) {
    return {
        type: AT_MODAL.CODE.TOGGLE,
        payload: isOpen
    };
}

export function toggleShareEnd (isOpen) {
    return {
        type: AT_MODAL.SHARE_END.TOGGLE,
        payload: isOpen
    };
}

export function toggleShareAddNum (isOpen, num) {
    let payload = num == undefined ? {isOpen} : {isOpen, num} 
    return {
        type: AT_MODAL.SHARE_ADD_NUM.TOGGLE,
        payload
    };
}

export function toggleAwardDesc (isOpen, text) {
    let payload = text ==undefined ? {isOpen} : {isOpen, text} 
    return {
        type: AT_MODAL.AWARD_DESC.TOGGLE,
        payload: payload
    }
}

export function togglePop (isOpen, text) {
    return {
        type: AT_MODAL.POP.TOGGLE,
        payload: {isOpen, text}
    }
}

export function toggleLoading (isOpen) {
    return {
        type: AT_MODAL.LOADING.TOGGLE,
        payload: {isOpen}
    }
}