<template lang="">
    <div class='container'>
        <form>
            <div class='container justify-content-lg-center'>
                <div class='row'>
                    <div class='col'>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name / Agency / Company">
                    </div>
                    <div class='col'>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Email">
                    </div>
                </div>
                <div class='row'>
                    <div class='col'>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Phone Number">
                    </div>
                    <div class='col'>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Subject">
                    </div>
                </div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                <br>
                <input type='submit' class='form-control btn btn-success'>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormComponent'
}
</script>

<style lang="">

</style>