import { createAction, props, on, createReducer } from '@ngrx/store'

enum ActionTypes {
    ApplyFilter = 'ApplyFilter',
    OpenGithubLogin = 'OpenGithubLogin',
    OpenEditDev = 'OpenEditDev',
    ApplyGitHubUserInfos = 'ApplyGitHubUserInfos',
    AddDev = 'AddDev',
    DeleteDev = 'DeleteDev',
    EditDev = 'EditDev',
    SetDevToEdit = 'SetDevToEdit'
}

export const applyFilter = createAction(ActionTypes.ApplyFilter, props<{ payload: any }>())
export const applyGitHubUserInfos = createAction(ActionTypes.ApplyGitHubUserInfos, props<{ payload: any }>())
export const openGithubLogin = createAction(ActionTypes.OpenGithubLogin, props<{ payload: any }>())
export const openEditDev = createAction(ActionTypes.OpenEditDev, props<{ payload: any }>())
export const addDev = createAction(ActionTypes.AddDev, props<{ payload: any }>())
export const deleteDev = createAction(ActionTypes.DeleteDev, props<{ payload: any }>())
export const editDev = createAction(ActionTypes.EditDev, props<{ payload: any }>())
export const setDevToEdit = createAction(ActionTypes.SetDevToEdit, props<{ payload: any }>())

const INITIAL_STATE = {
    filterValue: '',
    gitHubLoginOpened: false,
    editDevOpened: false,
    gitHubUserInfos: {},
    devToEdit: null,
    userList: [
        { id: 0, gitHubUsername: '', avatar: 'https://avatars1.githubusercontent.com/u/99944?s=400&v=4', name: 'João da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 1, gitHubUsername: '', avatar: 'https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg', name: 'Maria da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 2, gitHubUsername: '', avatar: 'https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg', name: 'Maria da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 3, gitHubUsername: '', avatar: 'https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg', name: 'Maria da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 4, gitHubUsername: '', avatar: 'https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg', name: 'Maria da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 5, gitHubUsername: '', avatar: 'https://avatars1.githubusercontent.com/u/99944?s=400&v=4', name: 'João da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 6, gitHubUsername: '', avatar: 'https://avatars1.githubusercontent.com/u/99944?s=400&v=4', name: 'João da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
        { id: 7, gitHubUsername: '', avatar: 'https://avatars1.githubusercontent.com/u/99944?s=400&v=4', name: 'João da Silva', city: 'Maringá - PR', techs: 'Vue e React' },
    ]
}

export const reducer = createReducer(
    INITIAL_STATE,
    on(applyFilter, (state, { payload }) => ({
        ...state,
         filterValue: payload
    })),
    on(openGithubLogin, (state, { payload }) => ({
        ...state,
        gitHubLoginOpened: payload
    })),
    on(applyGitHubUserInfos, (state, { payload }) => ({
        ...state,
        gitHubUserInfos: payload
    })),
    on(addDev, (state, { payload }) => ({
        ...state,
        userList: [ payload, ...state.userList]
    })),
    on(deleteDev, (state, { payload }) => ({
        ...state,
        userList: state.userList.filter(user => user.id !== payload)
    })),
    on(openEditDev, (state, { payload }) => ({
        ...state,
        editDevOpened: payload
    })),
    on(editDev, (state, { payload }) => ({
        ...state,
        userList: [payload.updatedUser, ...state.userList.filter(user => user.id !== payload.id)]
    })),
    on(setDevToEdit, (state, { payload }) => ({
        ...state,
        devToEdit: payload
    })))