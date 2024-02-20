
const RadioInput = () => {
    return (
        <>
            <center>
                <fieldset>
                    <div id="player-table-choice">
                        <div className="radio">
                            <input type="radio" id="crud-create-option" name="crud-user-input" value="create" />
                            <label htmlFor="crud-create-option">Add new player</label>
                        </div>
                        <div className="radio">

                            <input type="radio" id="crud-update-option" name="crud-user-input" value="update" />
                            <label htmlFor="crud-create-option">Update existing player</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="crud-delete-option" name="crud-user-input" value="delete" />
                            <label htmlFor="crud-create-option">Delete player</label>
                        </div>
                    </div>
                </fieldset>
            </center>
        </>
    );
}
export default RadioInput;