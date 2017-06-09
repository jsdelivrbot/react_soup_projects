/**
 * Created by bkaratas on 6/9/17.
 */

export default function (state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}