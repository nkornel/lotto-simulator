import { reactive } from "vue";

export const store = reactive({
    'tickets_count': 0,
    'weeks_spent': 0,
    'tickets_cost': 0,
    'matches_2': 0,
    'matches_3': 0,
    'matches_4': 0,
    'matches_5': 0,
    'winning_numbers': [],
    'my_numbers': [],
    'randomizing': false,
    'speed': 1
});