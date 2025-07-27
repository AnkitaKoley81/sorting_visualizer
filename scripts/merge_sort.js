function Merge()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}


function merge_sort(start, mid, end) {
    let left = start;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= end) {
        if (div_sizes[left] < div_sizes[right]) {
            temp.push(div_sizes[left]);
            div_update(divs[left], div_sizes[left], "red");
            left++;
        } else {
            temp.push(div_sizes[right]);
            div_update(divs[right], div_sizes[right], "red");
            right++;
        }
    }

    while (left <= mid) {
        temp.push(div_sizes[left]);
        div_update(divs[left], div_sizes[left], "red");
        left++;
    }

    while (right <= end) {
        temp.push(div_sizes[right]);
        div_update(divs[right], div_sizes[right], "red");
        right++;
    }

    for (let i = start; i <= end; i++) {
        div_sizes[i] = temp[i - start];
        div_update(divs[i], div_sizes[i], "green");
    }
}
function merge_partition(start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}