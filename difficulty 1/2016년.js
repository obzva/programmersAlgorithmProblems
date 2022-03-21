function solution(a, b) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const day = new Date(`${month[a-1]} ${b}, 2016`);
    return days[day.getDay()];
}