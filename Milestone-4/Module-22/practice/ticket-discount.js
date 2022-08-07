// ** cond1 -> jodi ticket er quantity -> 0-100 hoy tahole perTicket price = 100 taka
// ** cond2 -> jodi ticket er quantity -> 101 - 200 hoy tahole perTicket price = 90 taka
// ** cond3 -> jodi ticket er quantity -> 200+ hoy tahole perTicket price = 70 taka


const ticketQuantity = 120;

const totalTicketPrice = (ticketQuantity)=>{

    const first100PerTicketPrice = 100;
    const second101To200PerTicketPrice = 90;
    const third200PlusPerTickePrice = 70;

    if (ticketQuantity <= 100) {
        const ticketRate = ticketQuantity*first100PerTicketPrice;
        return ticketRate;
    } else if (ticketQuantity <= 200){
        const first100 = 100*first100PerTicketPrice;
        const restQuantity = ticketQuantity - 100;

        const ticketRate = restQuantity*second101To200PerTicketPrice + first100;

        return ticketRate;

        
    } else if ( ticketQuantity > 200 ){
        const first100 = 100*first100PerTicketPrice;
        const second200 = 100*second101To200PerTicketPrice;

        const restQuantity = ticketQuantity - 200;

        const ticketRate = first100 + second200 + restQuantity*third200PlusPerTickePrice;

        return ticketRate;
    }
}

const totalTicPrice = totalTicketPrice(ticketQuantity);

console.log(totalTicPrice);