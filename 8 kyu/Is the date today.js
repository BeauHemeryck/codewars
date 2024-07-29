function isToday(date) {
    const today = new Date();

    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    const inputYear = date.getFullYear();
    const inputMonth = date.getMonth();
    const inputDay = date.getDate();

    return (
        todayYear === inputYear &&
        todayMonth === inputMonth &&
        todayDay === inputDay
    );
}
